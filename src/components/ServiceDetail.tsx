import { CheckIcon } from 'lucide-react';
import type { Service, ServiceTheme } from '../types';

interface ServiceDetailProps {
  service: Service;
  reverse?: boolean;
}

const themeColors: Record<ServiceTheme, string> = {
  green: 'text-service-green',
  blue: 'text-service-blue',
  purple: 'text-service-purple',
  yellow: 'text-service-yellow',
};

const themeBg: Record<ServiceTheme, string> = {
  green: 'bg-service-green/10',
  blue: 'bg-service-blue/10',
  purple: 'bg-service-purple/10',
  yellow: 'bg-service-yellow/10',
};

export default function ServiceDetail({ service, reverse = false }: ServiceDetailProps) {
  const colorClass = themeColors[service.theme];
  const bgClass = themeBg[service.theme];

  return (
    <section data-cmp="ServiceDetail" className={`py-16 md:py-20 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text */}
          <div className={reverse ? 'lg:order-2' : ''}>
            <span className={`inline-block ${bgClass} ${colorClass} text-xs font-bold px-3 py-1 rounded-full mb-4`}>
              {service.name}
            </span>
            <h2 className="font-display font-bold text-2xl md:text-[28px] text-foreground mb-4">{service.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

            <h3 className="font-display font-bold text-lg text-foreground mb-4">Beneficios</h3>
            <ul className="space-y-3 mb-8">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckIcon size={18} className={`shrink-0 mt-0.5 ${colorClass}`} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-display font-bold text-lg text-foreground mb-4">Requisitos</h3>
            <ul className="space-y-2">
              {service.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${colorClass.replace('text-', 'bg-')} shrink-0 mt-1.5`} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual placeholder */}
          <div className={`${reverse ? 'lg:order-1' : ''} ${bgClass} rounded-2xl p-10 flex items-center justify-center min-h-[280px]`}>
            <div className="text-center">
              <div className={`text-6xl mb-4 ${colorClass}`}>✦</div>
              <p className={`font-display font-bold text-xl ${colorClass}`}>{service.name}</p>
              <p className="text-sm text-muted-foreground mt-2">Servicio exclusivo para asociados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
