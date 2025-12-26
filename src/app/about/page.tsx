
import { Metadata } from 'next';
import { Award, Gem, Rocket, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'À propos de DubaiNegoce',
    description: 'Découvrez notre mission : rendre les parfums de Dubaï authentiques et accessibles à tous.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="prose prose-invert prose-headings:font-headline prose-headings:text-primary max-w-none">
                    <h1 className="text-4xl md:text-5xl">Notre Mission</h1>
                    <p className="text-lg text-muted-foreground">
                        Chez DubaiNegoce, notre passion est de vous ouvrir les portes de la parfumerie orientale authentique. Nous croyons que le luxe olfactif de Dubaï ne devrait pas être un privilège, mais une découverte accessible à tous.
                    </p>
                    
                    <h2 className="mt-8">Nos Engagements</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-4 items-start">
                            <div className="p-2 bg-primary/10 rounded-full mt-1">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <strong>Sélection 100% Authentique</strong>
                                <p className="text-muted-foreground m-0">
                                    Nous importons directement depuis les Émirats pour garantir l'authenticité de chaque flacon.
                                </p>
                            </div>
                        </li>
                         <li className="flex gap-4 items-start">
                            <div className="p-2 bg-primary/10 rounded-full mt-1">
                                <Gem className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <strong>Prix Juste et Accessible</strong>
                                <p className="text-muted-foreground m-0">
                                    Un prix fixe sur une large sélection pour que vous puissiez explorer sans vous ruiner.
                                </p>
                            </div>
                        </li>
                         <li className="flex gap-4 items-start">
                            <div className="p-2 bg-primary/10 rounded-full mt-1">
                                <Rocket className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <strong>Conseils d'Experts</strong>
                                <p className="text-muted-foreground m-0">
                                    Que vous soyez amateur ou collectionneur, nous vous guidons avec passion.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                        <Image
                            src="https://res.cloudinary.com/dhjwimevi/image/upload/v1765656655/1764276016802-019ac70b-7597-767a-9264-b2442c7d0760_cqyfol.webp"
                            alt="Parfum de luxe sur un présentoir élégant"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            data-ai-hint="perfume display elegant"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
