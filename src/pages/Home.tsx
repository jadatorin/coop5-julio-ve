import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceGrid from '../components/ServiceGrid';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import NewsSection from '../components/NewsSection';

export default function Home() {
  return (
    <div data-cmp="Home">
      <Hero />
      <ServiceGrid />

      {/* Institutional Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-[28px] text-foreground mb-5">
                Quiénes Somos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La Cooperativa 5 de Julio R.L. nació en 1970 con la visión de crear un espacio donde las familias
                pudieran acceder a alimentos frescos, salud integral y servicios financieros solidarios. Hoy, más de
                3,250 asociados confían en nosotros para mejorar su calidad de vida.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nuestro modelo cooperativo se basa en la participación democrática, la ayuda mutua y el compromiso
                con el desarrollo sostenible de nuestra comunidad. Cada servicio que ofrecemos está diseñado para
                fortalecer los lazos entre productores y consumidores.
              </p>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Conoce nuestra historia
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="bg-gradient-card-green rounded-2xl p-10 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-7xl mb-4">🤝</div>
                <p className="font-display font-bold text-xl text-service-green">Cooperativismo Solidario</p>
                <p className="text-sm text-muted-foreground mt-2">Unidos por el bienestar común</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <NewsSection />

      {/* Secondary CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-2xl md:text-[28px] mb-4">
            Únete a Nuestra Comunidad Cooperativa
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Forma parte de una familia de más de 3,000 asociados que disfrutan de beneficios exclusivos en alimentación,
            salud y ahorro. Tu afiliación es el primer paso hacia una vida más segura y próspera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow-custom hover:bg-gray-100 transition-colors"
            >
              Solicitar Afiliación
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
