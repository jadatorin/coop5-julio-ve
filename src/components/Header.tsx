import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { navItems } from '../data/mockData';
import logoSrc from '../assets/images/logo-cooperativa-1d85e17f5f919b1e.png';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header data-cmp="Header" className="sticky top-0 z-50 bg-white border-b border-border shadow-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Inicio - Cooperativa 5 de Julio R.L.">
            <img src={logoSrc} alt="Logo Cooperativa 5 de Julio R.L." className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            <span className="font-display font-bold text-sm md:text-base leading-tight text-foreground">
              Cooperativa<br />5 de Julio R.L.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
          aria-label="Navegación móvil"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-gray-50'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
