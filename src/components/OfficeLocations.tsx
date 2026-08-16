import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
import { officeLocations } from '../data/mockData';

interface OfficeLocationsProps {
  title?: string;
}

export default function OfficeLocations({ title = 'Nuestras Oficinas' }: OfficeLocationsProps) {
  return (
    <section data-cmp="OfficeLocations" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {officeLocations.map((office) => (
            <div
              key={office.id}
              className="bg-gray-50 rounded-xl p-6 shadow-custom border border-border"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary/10 p-2.5 rounded-lg shrink-0">
                  <MapPinIcon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">{office.name}</h3>
                  <span className="text-xs bg-secondary/20 text-secondary-dark px-2 py-0.5 rounded-full font-medium">
                    {office.region}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <MapPinIcon size={16} className="shrink-0 mt-0.5 text-primary" />
                  <span>{office.address}</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <PhoneIcon size={16} className="shrink-0 text-primary" />
                  <span>{office.phone}</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MailIcon size={16} className="shrink-0 text-primary" />
                  <span>{office.email}</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <ClockIcon size={16} className="shrink-0 mt-0.5 text-primary" />
                  <span>{office.hours}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
