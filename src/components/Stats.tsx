import { stats } from '../data/mockData';

interface StatsProps {
  title?: string;
}

export default function Stats({ title = 'Nuestro Impacto en la Comunidad' }: StatsProps) {
  return (
    <section data-cmp="Stats" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">{title}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 md:p-8 text-center shadow-custom border border-border"
            >
              <div className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">
                {stat.value}{stat.suffix || ''}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
