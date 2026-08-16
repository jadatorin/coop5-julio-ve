import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; path: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumb = [] }: PageHeaderProps) {
  return (
    <section data-cmp="PageHeader" className="bg-gray-50 border-b border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
              </li>
              {breadcrumb.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ChevronRightIcon size={14} />
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-foreground font-medium">{item.label}</span>
                  ) : (
                    <Link to={item.path} className="hover:text-primary transition-colors">{item.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-display font-bold text-3xl md:text-[36px] text-foreground mb-3">{title}</h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
