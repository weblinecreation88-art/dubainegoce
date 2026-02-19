'use client';

import { Star } from 'lucide-react';
import Link from 'next/link';

const reviews = [
  {
    name: 'Sonia M.',
    city: 'Paris',
    rating: 5,
    product: 'Yara — Lattafa',
    comment: 'Je suis tombée amoureuse de ce parfum dès la première vaporisation. Tenue incroyable, plus de 8h sur ma peau. Et le prix... franchement imbattable par rapport aux grandes marques.',
    date: 'Janvier 2025',
  },
  {
    name: 'Karim B.',
    city: 'Lyon',
    rating: 5,
    product: 'Khamrah — Lattafa',
    comment: 'Livraison ultra rapide, parfum reçu en 48h nickel. Le flacon est magnifique, le parfum dure toute la journée. Mon entourage me demande tous ce que je porte. Top !',
    date: 'Décembre 2024',
  },
  {
    name: 'Yasmine D.',
    city: 'Marseille',
    rating: 5,
    product: 'Zaffiro Regale — Alhambra',
    comment: "Service client impeccable, à l'écoute et là pour vous tout au long du processus. Le parfum est exactement comme décrit, oriental et envoûtant. Je recommande vivement.",
    date: 'Février 2025',
  },
  {
    name: 'Thomas L.',
    city: 'Bordeaux',
    rating: 5,
    product: 'Asad — Lattafa',
    comment: "Rapport qualité/prix au top ! J'ai testé beaucoup de parfums orientaux, celui-là est dans mon top 3. Vendeur aimable et courtois, et livraison super rapide.",
    date: 'Janvier 2025',
  },
];

export function CustomerReviewsSection() {
  return (
    <section className="py-20 bg-card border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-headline">Ce que disent nos clients</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-sm text-muted-foreground">· +150 avis vérifiés</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="bg-background border rounded-lg p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic flex-grow">
                "{review.comment}"
              </p>
              <div className="border-t pt-3">
                <p className="text-[10px] uppercase tracking-wider text-primary mb-1">{review.product}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <p className="text-[11px] text-muted-foreground">{review.city} · {review.date}</p>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider bg-green-50 text-green-600 px-2 py-1 border border-green-100 rounded dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                    ✓ Vérifié
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="https://g.page/r/CYfNDXizM9KSEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Voir tous les avis Google →
          </Link>
        </div>
      </div>
    </section>
  );
}
