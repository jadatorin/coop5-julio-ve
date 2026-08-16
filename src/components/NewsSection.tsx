import { CalendarIcon } from 'lucide-react';
import { newsItems } from '../data/mockData';

interface NewsSectionProps {
  title?: string;
}

export default function NewsSection({ title = 'Novedades y Eventos' }: NewsSectionProps) {
  return (
    <section data-cmp="NewsSection" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-custom border border-border hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <CalendarIcon size={14} />
                  <span>{new Date(item.date).toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">{item.category}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
