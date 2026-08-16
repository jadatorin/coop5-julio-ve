import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { fairEvents } from '../data/mockData';

interface EventCalendarProps {
  title?: string;
}

export default function EventCalendar({ title = 'Calendario de Ferias' }: EventCalendarProps) {
  return (
    <section data-cmp="EventCalendar" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {fairEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-custom border border-border"
            >
              <img src={event.image} alt={event.name} className="w-full h-44 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{event.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon size={16} className="text-primary shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPinIcon size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.products.slice(0, 3).map((p, i) => (
                    <span key={i} className="text-xs bg-white border border-border px-2.5 py-1 rounded-full text-muted-foreground">
                      {p}
                    </span>
                  ))}
                  {event.products.length > 3 && (
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                      +{event.products.length - 3} más
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
