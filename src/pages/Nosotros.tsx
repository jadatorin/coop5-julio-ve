import { useState } from 'react';
import { DownloadIcon } from 'lucide-react';
import { toast } from 'sonner';
import PageHeader from '../components/PageHeader';
import Timeline from '../components/Timeline';
import TeamGrid from '../components/TeamGrid';
import { documents } from '../data/mockData';
import galeria1 from '../assets/images/gallery/galeria-1.jpg';
import galeria2 from '../assets/images/gallery/galeria-2.jpg';
import galeria3 from '../assets/images/gallery/galeria-3.jpg';
import galeria4 from '../assets/images/gallery/galeria-4.jpg';
import galeria5 from '../assets/images/gallery/galeria-5.jpg';
import galeria6 from '../assets/images/gallery/galeria-6.jpg';
import galeria7 from '../assets/images/gallery/galeria-7.jpg';
import galeria8 from '../assets/images/gallery/galeria-8.jpg';

export default function Nosotros() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idNumber: '',
    address: '',
    occupation: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Solicitud de afiliación enviada. Nos contactaremos en 3-5 días hábiles.');
      setFormData({ name: '', email: '', phone: '', idNumber: '', address: '', occupation: '' });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div data-cmp="Nosotros">
      <PageHeader
        title="Nosotros"
        subtitle="Conoce la historia, misión y equipo detrás de Cooperativa 5 de Julio R.L."
        breadcrumb={[{ label: 'Nosotros', path: '/nosotros' }]}
      />

      {/* History */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="bg-gradient-card-green rounded-2xl p-10 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-7xl mb-4">🏛️</div>
                <p className="font-display font-bold text-xl text-service-green">Desde 1970</p>
                <p className="text-sm text-muted-foreground mt-2">56 años de servicio comunitario</p>
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-[28px] text-foreground mb-5">Nuestra Historia</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En 1970, un grupo de 45 familias del cantón central se reunió con una visión compartida: crear un espacio
                donde pudieran acceder a alimentos frescos a precios justos, sin depender de intermediarios. Así nació la
                Cooperativa 5 de Julio R.L., nombrada en honor a la fecha de independencia que simboliza la autonomía
                comunitaria.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lo que comenzó como una pequeña feria semanal en la plaza central creció hasta convertirse en una red
                integral de servicios que hoy beneficia a más de 3,250 familias. Cada hito en nuestra historia ha sido
                impulsado por la participación activa de nuestros asociados.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoy, la cooperativa es reconocida como un modelo de desarrollo cooperativo sostenible, combinando
                economía solidaria, acceso a salud y protección social para toda la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">
            Misión, Visión y Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-custom border border-border text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Misión</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fortalecer el bienestar de las familias asociadas mediante servicios cooperativos de alimentación,
                salud, protección social y ahorro, promoviendo la solidaridad y el desarrollo sostenible de nuestra
                comunidad.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-custom border border-border text-center">
              <div className="text-4xl mb-4"></div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Visión</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ser la cooperativa líder en desarrollo comunitario integral, reconocida por su transparencia,
                innovación social y compromiso inquebrantable con la calidad de vida de sus asociados y el entorno.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-custom border border-border text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Valores</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Solidaridad y ayuda mutua</li>
                <li>Transparencia y honestidad</li>
                <li>Participación democrática</li>
                <li>Responsabilidad social</li>
                <li>Sostenibilidad ambiental</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TeamGrid />
      <Timeline />

      {/* Community Impact */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">
            Impacto en la Comunidad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌾', label: 'Productores Apoyados', value: '120+' },
              { icon: '', label: 'Consultas Médicas/Año', value: '4,500+' },
              { icon: '👨👩‍👧‍', label: 'Familias Protegidas', value: '1,800+' },
              { icon: '💰', label: 'Créditos Otorgados', value: 'Bs. 2.5M' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center border border-border shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-display font-bold text-2xl text-primary mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">
            Galería de Actividades
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
                alt={`Actividad comunitaria ${i + 1}`}
                className="w-full h-40 md:h-48 object-cover rounded-xl shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">
            Documentos y Estatutos
          </h2>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between bg-gray-50 rounded-xl p-5 border border-border shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <DownloadIcon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{doc.title}</h4>
                    <p className="text-xs text-muted-foreground">{doc.type} • {doc.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => toast.info(`Descargando ${doc.title}...`)}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Descargar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-custom border border-border p-6 md:p-8">
            <h2 className="font-display font-bold text-2xl text-foreground mb-2">Formulario de Afiliación</h2>
            <p className="text-sm text-muted-foreground mb-6">Completa tus datos y nos pondremos en contacto contigo.</p>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="af-name" className="block text-sm font-medium text-foreground mb-1.5">
                    Nombre completo <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="af-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="af-email" className="block text-sm font-medium text-foreground mb-1.5">
                    Correo electrónico <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="af-email"
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
                  <label htmlFor="af-phone" className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
                  <input
                    id="af-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="af-id" className="block text-sm font-medium text-foreground mb-1.5">
                    Número de cédula <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="af-id"
                    name="idNumber"
                    type="text"
                    required
                    value={formData.idNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="af-address" className="block text-sm font-medium text-foreground mb-1.5">Dirección</label>
                <input
                  id="af-address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="af-occupation" className="block text-sm font-medium text-foreground mb-1.5">Ocupación</label>
                <input
                  id="af-occupation"
                  name="occupation"
                  type="text"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-custom transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Enviando...' : 'Enviar Solicitud de Afiliación'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
