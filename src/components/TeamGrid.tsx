import { teamMembers } from '../data/mockData';

interface TeamGridProps {
  title?: string;
}

export default function TeamGrid({ title = 'Equipo Directivo' }: TeamGridProps) {
  return (
    <section data-cmp="TeamGrid" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-custom border border-border text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
