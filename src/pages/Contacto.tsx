import { useState } from 'react';
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import { toast } from 'sonner';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import OfficeLocations from '../components/OfficeLocations';
import FAQ from '../components/FAQ';

export default function Contacto() {
  return (
    <div data-cmp="Contacto">
      <PageHeader
        title="Contacto"
        subtitle="Estamos aquí para atenderte. Visítanos en nuestras oficinas o contáctanos por cualquiera de nuestros canales."
        breadcrumb={[{ label: 'Contacto', path: '/contacto' }]}
      />

      {/* Form + Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="font-display font-bold text-xl text-foreground mb-6">Envíanos un Mensaje</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-border shadow-sm">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">Oficina Central</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPinIcon size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Dirección</p>
                      <p className="text-sm text-muted-foreground">Calle Principal #45, Centro de Barquisimeto, Lara, Venezuela</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PhoneIcon size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Teléfonos</p>
                      <p className="text-sm text-muted-foreground">+58 251-222-3333 / +58 412-888-9999</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MailIcon size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Correo electrónico</p>
                      <p className="text-sm text-muted-foreground">info@cooperativa5dejulio.com.ve</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClockIcon size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Horario de atención</p>
                      <p className="text-sm text-muted-foreground">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sábados: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Offices Summary */}
              <div className="bg-gradient-card-green rounded-xl p-6 border border-service-green/20 shadow-sm">
                <h3 className="font-display font-bold text-lg text-service-green mb-3">Oficinas Regionales</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li><strong>Norte:</strong> Av. Central #12, Barquisimeto • Tel: +58 251-224-4556</li>
                  <li><strong>Sur:</strong> Calle 5, Barrio El Carmen, Barquisimeto • Tel: +58 251-223-3445</li>
                  <li><strong>Cabudar:</strong> Plaza Mayor Local 8, Cabudar • Tel: +58 251-227-7889</li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 rounded-xl p-6 border border-border shadow-sm">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon size={20} className="text-primary" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={20} className="text-primary" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-3">@Cooperativa5Julio en ambas plataformas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OfficeLocations />

      {/* Hours Detail */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">
            Horarios de Atención Detallados
          </h2>
          <div className="bg-white rounded-xl shadow-custom border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left py-4 px-6 font-display font-semibold">Servicio</th>
                  <th className="text-left py-4 px-6 font-display font-semibold">Días</th>
                  <th className="text-left py-4 px-6 font-display font-semibold">Horario</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Atención General', 'Lun - Vie', '8:00 AM - 5:00 PM'],
                  ['Ferias de Consumo', 'Miércoles y Sábados', '7:00 AM - 2:00 PM'],
                  ['Red de Salud', 'Lun - Vie', '8:00 AM - 4:00 PM'],
                  ['Ahorro Comunitario', 'Lun - Vie', '8:00 AM - 3:00 PM'],
                  ['Fondo Funerario', 'Lun - Vie', '8:00 AM - 5:00 PM'],
                ].map(([service, days, hours], i) => (
                  <tr key={i} className="border-b border-border hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-foreground">{service}</td>
                    <td className="py-4 px-6 text-muted-foreground">{days}</td>
                    <td className="py-4 px-6 text-muted-foreground">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQ title="Preguntas Frecuentes" />
    </div>
  );
}
