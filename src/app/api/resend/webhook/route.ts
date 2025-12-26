
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resendWebhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendWebhookSecret || !resendApiKey) {
    console.error('!!! ERREUR FATALE: Les variables d\'environnement Resend (RESEND_API_KEY ou RESEND_WEBHOOK_SECRET) ne sont pas configurées sur le serveur.');
    return NextResponse.json({ error: 'Configuration du serveur incomplète.' }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);
  const signature = req.headers.get('resend-signature');
  const body = await req.text();

  if (!signature) {
    console.error('[Webhook Resend] ERREUR: Signature manquante.');
    return NextResponse.json({ error: 'Signature manquante.' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.webhooks.verify({
        body,
        headers: { 'resend-signature': signature },
    });

    if (error) {
        console.error(`[Webhook Resend] ERREUR de vérification de la signature: ${error.message}`);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    if (data) {
        console.log(`[Webhook Resend] Événement reçu et vérifié : ${data.type}`);
        // Ici, vous pouvez ajouter une logique pour traiter les différents types d'événements
        // switch (data.type) {
        //   case 'email.delivered':
        //     // Logique pour marquer un email comme livré dans votre base de données
        //     break;
        //   case 'email.bounced':
        //     // Logique pour gérer un email qui n'a pas pu être livré
        //     break;
        //   default:
        //     console.log(`[Webhook Resend] Événement non géré : ${data.type}`);
        // }
    }


  } catch (err: any) {
    console.error(`[Webhook Resend] ERREUR inattendue : ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }


  return NextResponse.json({ received: true });
}
