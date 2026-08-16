import { useState } from 'react';
import { toast } from 'sonner';
import Hero from '../components/Hero';
import EventCalendar from '../components/EventCalendar';
import ProductShowcase from '../components/ProductShowcase';
import FAQ from '../components/FAQ';
import galeria1 from '../assets/images/gallery/galeria-1.jpg';
import galeria2 from '../assets/images/gallery/galeria-2.jpg';
import galeria3 from '../assets/images/gallery/galeria-3.jpg';
import galeria4 from '../assets/images/gallery/galeria-4.jpg';
import galeria5 from '../assets/images/gallery/galeria-5.jpg';
import galeria6 from '../assets/images/gallery/galeria-6.jpg';
import galeria7 from '../assets/images/gallery/galeria-7.jpg';
import galeria8 from '../assets/images/gallery/galeria-8.jpg';

export default function FeriasDeConsumo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'consumer',
    products: '',
    location: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Inscripción recibida. Te contactaremos para confirmar tu participación.');
      setFormData({ name: '', email: '', phone: '', role: 'consumer', products: '', location: '' });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div data-cmp="FeriasDeConsumo">
      <Hero
        title="Ferias de Consumo"
        subtitle="Espacios comunitarios donde productores locales y consumidores se encuentran para intercambiar alimentos frescos a precios justos."
        ctaText="Inscribirse en la Próxima Feria"
        ctaLink="#inscripcion"
      />

      {/* What Are Ferias */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-foreground mb-5">¿Qué Son las Ferias de Consumo?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Las Ferias de Consumo son espacios semanales organizados por la cooperativa donde productores locales
            ofrecen directamente al público frutas, verduras, lácteos, carnes, panadería artesanal y otros productos
            frescos sin intermediarios.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Este modelo beneficia tanto a productores —quienes obtienen mejores precios— como a consumidores —que
            acceden a alimentos de calidad a costos accesibles—. Cada feria es también un punto de encuentro
            comunitario que fortalece los lazos entre familias.
          </p>
        </div>
      </section>

      <EventCalendar />

      {/* Map placeholder */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">
            Ubicaciones de Ferias
          </h2>
          <div className="bg-white rounded-2xl shadow-custom border border-border overflow-hidden">
            <div className="bg-gradient-card-green p-16 flex items-center justify-center min-h-[320px]">
              <div className="text-center">
                <div className="text-6xl mb-4"></div>
                <p className="font-display font-bold text-xl text-service-green">Mapa de Ubicaciones</p>
                <p className="text-sm text-muted-foreground mt-2">Plaza Bolívar • Parque Miranda • Los Samanes • Cabudar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductShowcase />

      {/* Producer & Consumer Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Producers */}
            <div className="bg-gradient-card-green rounded-2xl p-8 border border-service-green/20 shadow-sm">
              <h3 className="font-display font-bold text-xl text-service-green mb-4">Información para Productores</h3>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-service-green font-bold shrink-0">✓</span>
                  <span>Pueden participar todos los asociados que produzcan alimentos o artesanías</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-service-green font-bold shrink-0">✓</span>
                  <span>El espacio en feria tiene un costo subsidiado de Bs. 30,00 por jornada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-service-green font-bold shrink-0">✓</span>
                  <span>Incluye mesa, toldo y señalización básica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-service-green font-bold shrink-0">✓</span>
                  <span>Se requiere inscripción previa con lista de productos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-service-green font-bold shrink-0">✓</span>
                  <span>Capacitación gratuita en manejo higiénico de alimentos</span>
                </li>
              </ul>
            </div>

            {/* Consumers */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">Información para Consumidores</h3>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span>Acceso libre a todas las ferias, asociado o no</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span>Los asociados disfrutan descuentos adicionales del 10-15%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span>Aceptamos efectivo, Pago Móvil y tarjetas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span>Bolsas reutilizables disponibles en cada feria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span>Programa de puntos acumulables por compras</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">
            Galería de Ferias Anteriores
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              galeria1,
              galeria2,
              galeria3,
              galeria4,
              galeria5,
              galeria6,
              galeria7,
              galeria8,
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Feria anterior ${i + 1}`}
                className="w-full h-40 md:h-48 object-cover rounded-xl shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="inscripcion" className="py-16 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl shadow-custom border border-border p-6 md:p-8">
            <h2 className="font-display font-bold text-2xl text-foreground mb-2">Inscripción para Ferias</h2>
            <p className="text-sm text-muted-foreground mb-6">Regístrate como productor o consumidor para la próxima feria.</p>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="feria-name" className="block text-sm font-medium text-foreground mb-1.5">
                    Nombre completo <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="feria-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="feria-email" className="block text-sm font-medium text-foreground mb-1.5">
                    Correo electrónico <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="feria-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="feria-phone" className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
                  <input
                    id="feria-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="feria-role" className="block text-sm font-medium text-foreground mb-1.5">
                    Tipo de participación <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="feria-role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  >
                    <option value="consumer">Consumidor</option>
                    <option value="producer">Productor / Vendedor</option>
                  </select>
                </div>
              </div>
              {formData.role === 'producer' && (
                <div>
                  <label htmlFor="feria-products" className="block text-sm font-medium text-foreground mb-1.5">
                    Productos que ofrecerá <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="feria-products"
                    name="products"
                    rows={3}
                    value={formData.products}
                    onChange={handleChange}
                    placeholder="Lista de productos..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-vertical"
                  />
                </div>
              )}
              <div>
                <label htmlFor="feria-location" className="block text-sm font-medium text-foreground mb-1.5">
                  Feria de preferencia
                </label>
                <select
                  id="feria-location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                >
                  <option value="">Seleccionar...</option>
                  <option value="plaza-bolivar">Feria Semanal Centro - Plaza Bolívar</option>
                  <option value="parque-miranda">Feria Dominical Norte - Parque Miranda</option>
                  <option value="los-samanes">Feria Especial Fin de Mes - Los Samanes</option>
                  <option value="cabudar">Feria Navideña - Cabudar</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-custom transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Enviando...' : 'Enviar Inscripción'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <FAQ title="Preguntas Frecuentes sobre Ferias" filterService="ferias" />
    </div>
  );
}
