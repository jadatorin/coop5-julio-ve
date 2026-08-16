import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title = 'Construyendo Comunidad, Cosechando Bienestar',
  subtitle = 'Más de 56 años uniendo familias a través del cooperativismo solidario. Accede a alimentos frescos, salud integral y ahorro comunitario.',
  ctaText = 'Ferias de Consumo',
  ctaLink = '/ferias-de-consumo',
}: HeroProps) {
  return (
    <section data-cmp="Hero" className="bg-gradient-hero py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight text-foreground mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>
        <Link
          to={ctaLink}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg shadow-custom transition-all hover:shadow-lg text-base md:text-lg"
        >
          {ctaText}
          <ArrowRightIcon size={20} />
        </Link>
      </div>
    </section>
  );
}
