import { Link } from 'react-router-dom';
import { ShoppingBasketIcon, HeartPulseIcon, ShieldIcon, PiggyBankIcon, ArrowRightIcon } from 'lucide-react';
import type { ServiceTheme } from '../types';

interface ServiceCardProps {
  name: string;
  description: string;
  theme: ServiceTheme;
  icon: string;
  linkPath: string;
}

const themeConfig: Record<ServiceTheme, { bg: string; border: string; text: string; iconBg: string; gradient: string }> = {
  green: {
    bg: 'bg-gradient-card-green',
    border: 'border-service-green/20',
    text: 'text-service-green',
    iconBg: 'bg-service-green/10',
    gradient: 'bg-gradient-card-green',
  },
  blue: {
    bg: 'bg-gradient-card-blue',
    border: 'border-service-blue/20',
    text: 'text-service-blue',
    iconBg: 'bg-service-blue/10',
    gradient: 'bg-gradient-card-blue',
  },
  purple: {
    bg: 'bg-gradient-card-purple',
    border: 'border-service-purple/20',
    text: 'text-service-purple',
    iconBg: 'bg-service-purple/10',
    gradient: 'bg-gradient-card-purple',
  },
  yellow: {
    bg: 'bg-gradient-card-yellow',
    border: 'border-service-yellow/20',
    text: 'text-service-yellow',
    iconBg: 'bg-service-yellow/10',
    gradient: 'bg-gradient-card-yellow',
  },
};

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  ShoppingBasketIcon,
  HeartPulseIcon,
  ShieldIcon,
  PiggyBankIcon,
};

export default function ServiceCard({ name, description, theme, icon, linkPath }: ServiceCardProps) {
  const config = themeConfig[theme];
  const IconComponent = iconMap[icon] || ShoppingBasketIcon;

  return (
    <div
      data-cmp="ServiceCard"
      className={`${config.bg} ${config.border} border rounded-xl p-6 flex flex-col h-full shadow-custom hover:shadow-lg transition-shadow`}
    >
      {/* Icon */}
      <div className={`${config.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
        <IconComponent size={28} className={config.text} />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-xl text-foreground mb-3">{name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-5">{description}</p>

      {/* Link */}
      <Link
        to={linkPath}
        className={`inline-flex items-center gap-2 ${config.text} font-semibold text-sm hover:gap-3 transition-all`}
      >
        Conocer más
        <ArrowRightIcon size={16} />
      </Link>
    </div>
  );
}
