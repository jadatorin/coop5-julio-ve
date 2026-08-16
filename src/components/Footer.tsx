import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { navItems } from '../data/mockData';

export default function Footer() {
  return (
    <footer data-cmp="Footer" className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Cooperativa 5 de Julio R.L.</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Más de 56 años fortaleciendo la comunidad a través del cooperativismo solidario y el desarrollo sostenible.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Ferias de Consumo</li>
              <li>Red de Salud</li>
              <li>Fondo Funerario</li>
              <li>Ahorro Comunitario</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPinIcon size={16} className="shrink-0 mt-0.5" />
                <span>Av. Principal #45, Barquisimeto Centro</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon size={16} className="shrink-0" />
                <span>+58 251-222-3344</span>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon size={16} className="shrink-0" />
                <span>info@cooperativa5dejulio.com.ve</span>
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon size={16} className="shrink-0 mt-0.5" />
                <span>Lun-Vie: 7AM-5PM<br />Sáb: 8AM-12PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Cooperativa 5 de Julio R.L. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
