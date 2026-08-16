import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ServiceDetail from '../components/ServiceDetail';
import FAQ from '../components/FAQ';
import { services } from '../data/mockData';

export default function Servicios() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div data-cmp="Servicios">
      <PageHeader
        title="Servicios"
        subtitle="Cuatro pilares de bienestar diseñados para fortalecer a cada familia asociada."
        breadcrumb={[{ label: 'Servicios', path: '/servicios' }]}
      />

      {/* Benefits Summary */}
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-xl md:text-[28px] text-center text-foreground mb-8">
            Beneficios para Asociados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '', label: 'Precios preferenciales en ferias' },
              { icon: '', label: 'Cobertura médica subsidiada' },
              { icon: '', label: 'Protección funeraria familiar' },
              { icon: '', label: 'Créditos con tasas blandas' },
            ].map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 text-center border border-border shadow-sm">
                <div className="text-3xl mb-2">{b.icon}</div>
                <p className="text-sm font-medium text-foreground">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, i) => (
        <ServiceDetail key={service.id} service={service} reverse={i % 2 !== 0} />
      ))}

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">
            Comparativa de Servicios
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-display font-bold text-foreground">Característica</th>
                  <th className="text-center py-4 px-4 font-display font-bold text-service-green">Ferias</th>
                  <th className="text-center py-4 px-4 font-display font-bold text-service-blue">Salud</th>
                  <th className="text-center py-4 px-4 font-display font-bold text-service-purple">Funerario</th>
                  <th className="text-center py-4 px-4 font-display font-bold text-service-yellow">Ahorro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aporte mensual', 'Bs. 20,00', 'Bs. 50,00', 'Bs. 25,00', 'Variable'],
                  ['Cobertura familiar', 'Sí', 'Sí', 'Sí', 'Individual'],
                  ['Antigüedad requerida', 'Ninguna', '1 mes', '6 meses', 'Ninguna'],
                  ['Beneficio inmediato', 'Sí', 'Sí', 'No', 'Sí'],
                  ['Renovable', 'Anual', 'Anual', 'Permanente', 'Continuo'],
                ].map(([feature, ...values], i) => (
                  <tr key={i} className="border-b border-border hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-foreground">{feature}</td>
                    {values.map((v, j) => (
                      <td key={j} className="py-4 px-4 text-center text-muted-foreground">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-12">
            Proceso de Inscripción
          </h2>
          <div className="space-y-6">
            {[
              { step: 1, title: 'Solicitud', desc: 'Completa el formulario de afiliación en línea o en cualquiera de nuestras oficinas.' },
              { step: 2, title: 'Documentación', desc: 'Presenta tu cédula de identidad y comprobante de domicilio vigente.' },
              { step: 3, title: 'Charla Introductoria', desc: 'Asiste a una sesión informativa sobre derechos y deberes del asociado.' },
              { step: 4, title: 'Aporte Inicial', desc: 'Realiza el aporte inicial de 5,000 que acredita tu membresía.' },
              { step: 5, title: 'Activación', desc: 'En 3-5 días hábiles recibirás tu carnet de asociado y acceso a todos los servicios.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5 bg-white rounded-xl p-6 border border-border shadow-sm">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="Preguntas Frecuentes por Servicio" />

      {/* Advisor CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-2xl md:text-[28px] mb-4">¿Necesitas Asesoría Personalizada?</h2>
          <p className="text-white/80 text-lg mb-8">
            Nuestros asesores están disponibles para ayudarte a elegir el servicio ideal para tu familia.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow-custom hover:bg-gray-100 transition-colors"
          >
            Contactar un Asesor
          </a>
        </div>
      </section>
    </div>
  );
}
