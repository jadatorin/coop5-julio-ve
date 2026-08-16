import { StarIcon } from 'lucide-react';
import { testimonials } from '../data/mockData';

interface TestimonialsProps {
  title?: string;
}

export default function Testimonials({ title = 'Lo Que Dicen Nuestros Asociados' }: TestimonialsProps) {
  return (
    <section data-cmp="Testimonials" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 rounded-xl p-6 shadow-custom border border-border flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={16} className="text-secondary fill-secondary" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-foreground leading-relaxed flex-grow mb-5 italic">"{t.quote}"</p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
