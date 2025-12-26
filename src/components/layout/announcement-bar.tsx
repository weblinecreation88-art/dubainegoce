
export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="h-10 w-full whitespace-nowrap">
          <div className="animate-marquee py-2.5">
            <span className="mx-4">Prix unique : tous nos parfums sont à 35€ !</span>
            <span className="mx-4">Livraison gratuite avec Mondial Relay.</span>
            <span className="mx-4">Parfums 100% authentiques importés de Dubaï.</span>
            <span className="mx-4">Prix unique : tous nos parfums sont à 35€ !</span>
            <span className="mx-4">Livraison gratuite avec Mondial Relay.</span>
            <span className="mx-4">Parfums 100% authentiques importés de Dubaï.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
