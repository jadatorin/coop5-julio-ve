import { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { faqItems } from '../data/mockData';

interface FAQProps {
  title?: string;
  filterService?: string;
}

export default function FAQ({ title = 'Preguntas Frecuentes', filterService }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = filterService
    ? faqItems.filter((f) => f.service === filterService || f.service === 'general')
    : faqItems;

  return (
    <section data-cmp="FAQ" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">{title}</h2>
        <div className="space-y-3">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-border shadow-custom overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-sm md:text-base text-foreground">{item.question}</span>
                <ChevronRightIcon
                  size={18}
                  className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === i ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
