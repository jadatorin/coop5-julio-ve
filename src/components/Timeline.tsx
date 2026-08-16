import { timelineEvents } from '../data/mockData';

interface TimelineProps {
  title?: string;
}

export default function Timeline({ title = 'Nuestra Historia' }: TimelineProps) {
  return (
    <section data-cmp="Timeline" className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">{title}</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 md:hidden" />

          <div className="space-y-8">
            {timelineEvents.map((event, i) => (
              <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-custom -translate-x-1/2 z-10 mt-2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 rounded-xl p-5 border border-border shadow-sm">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {event.year}
                    </span>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
