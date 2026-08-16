import ServiceCard from './ServiceCard';
import { services } from '../data/mockData';

interface ServiceGridProps {
  title?: string;
  subtitle?: string;
}

export default function ServiceGrid({
  title = 'Nuestros Servicios',
  subtitle = 'Cuatro pilares que fortalecen el bienestar de nuestra comunidad cooperativa.',
}: ServiceGridProps) {
  const serviceLinks: Record<string, string> = {
    ferias: '/ferias-de-consumo',
    salud: '/servicios',
    sepelio: '/servicios',
    ahorro: '/servicios',
  };

  return (
    <section data-cmp="ServiceGrid" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-foreground mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              theme={service.theme}
              icon={service.icon}
              linkPath={serviceLinks[service.id] || '/servicios'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
