import type {
  Service,
  Stat,
  Testimonial,
  NewsItem,
  TeamMember,
  TimelineEvent,
  FairEvent,
  Product,
  OfficeLocation,
  FAQItem,
  Document,
  NavItem,
} from '../types';

// Local images
import avatar1 from '../assets/images/testimonials/avatar-1.jpg';
import avatar2 from '../assets/images/testimonials/avatar-2.jpg';
import avatar3 from '../assets/images/testimonials/avatar-3.jpg';
import avatar4 from '../assets/images/testimonials/avatar-4.jpg';
import noticia1 from '../assets/images/news/noticias-1.jpg';
import noticia2 from '../assets/images/news/noticias-2.jpg';
import noticia3 from '../assets/images/news/noticias-3.jpg';
import feriaImg1 from '../assets/images/news/feria-1.jpg';
import feriaImg2 from '../assets/images/news/feria-2.jpg';
import feriaImg3 from '../assets/images/news/feria-3.jpg';
import feriaImg4 from '../assets/images/news/feria-4.jpg';
import equipo1 from '../assets/images/team/equipo-1.jpg';
import equipo2 from '../assets/images/team/equipo-2.jpg';
import equipo3 from '../assets/images/team/equipo-3.jpg';
import equipo4 from '../assets/images/team/equipo-4.jpg';
import tomate from '../assets/images/products/tomate.jpg';
import queso from '../assets/images/products/queso.jpg';
import miel from '../assets/images/products/miel.jpg';
import platano from '../assets/images/products/platano.jpg';
import huevo from '../assets/images/products/huevo.jpg';
import cafe from '../assets/images/products/cafe.jpg';

export const navItems: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Ferias de Consumo', path: '/ferias-de-consumo' },
  { label: 'Contacto', path: '/contacto' },
];

export const services: Service[] = [
  {
    id: 'ferias',
    name: 'Ferias de Consumo',
    description: 'Espacios comunitarios donde productores locales ofrecen alimentos frescos y productos artesanales a precios justos.',
    theme: 'green',
    icon: 'ShoppingBasketIcon',
    benefits: ['Acceso directo a productores locales', 'Precios competitivos sin intermediarios', 'Alimentos frescos y de temporada', 'Fortalecimiento de la economía local'],
    requirements: ['Ser asociado activo', 'Presentar cédula de identidad', 'Asistir a charla introductoria'],
  },
  {
    id: 'salud',
    name: 'Red de Salud',
    description: 'Programa integral de atención médica que incluye consultas, exámenes preventivos y cobertura para asociados y sus familias.',
    theme: 'blue',
    icon: 'HeartPulseIcon',
    benefits: ['Consultas médicas con descuento', 'Exámenes de laboratorio subsidiados', 'Cobertura dental básica', 'Atención de emergencias 24/7'],
    requirements: ['Afiliación vigente', 'Aporte mensual al fondo de salud', 'Registro familiar actualizado'],
  },
  {
    id: 'sepelio',
    name: 'Fondo Funerario',
    description: 'Apoyo solidario para gastos funerarios que brinda tranquilidad y acompañamiento en momentos difíciles a las familias asociadas.',
    theme: 'purple',
    icon: 'ShieldIcon',
    benefits: ['Cobertura total de gastos funerarios', 'Asesoría legal y administrativa', 'Acompañamiento emocional', 'Extensión a familiares directos'],
    requirements: ['Antigüedad mínima de 6 meses', 'Cuotas al día', 'Declaración de beneficiarios'],
  },
  {
    id: 'ahorro',
    name: 'Ahorro Comunitario',
    description: 'Sistema de ahorro colectivo con tasas preferenciales que fomenta la cultura del ahorro y el acceso a créditos blandos.',
    theme: 'yellow',
    icon: 'PiggyBankIcon',
    benefits: ['Tasas de interés preferenciales', 'Créditos accesibles para asociados', 'Planes de ahorro flexibles', 'Bonificaciones por fidelidad'],
    requirements: ['Cuenta de ahorros activa', 'Depósito mínimo mensual', 'Historial crediticio limpio'],
  },
];

export const stats: Stat[] = [
  { label: 'Asociados Activos', value: '3,250', suffix: '+' },
  { label: 'Ferias Realizadas', value: '186' },
  { label: 'Familias Beneficiadas', value: '1,800', suffix: '+' },
  { label: 'Años de Servicio', value: '56' },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'María Elena Rodríguez',
    role: 'Asociada desde 2015',
    quote: 'Las Ferias de Consumo han transformado cómo alimentamos a nuestra familia. Los productos son frescos y los precios muy accesibles.',
    avatar: avatar1,
  },
  {
    id: 't2',
    name: 'Carlos Alberto Méndez',
    role: 'Productor Local',
    quote: 'Gracias a la cooperativa puedo vender mis cosechas directamente a la comunidad sin depender de intermediarios. Es un verdadero apoyo.',
    avatar: avatar2,
  },
  {
    id: 't3',
    name: 'Ana Lucía Fernández',
    role: 'Asociada desde 2019',
    quote: 'El Fondo Funerario nos dio tranquilidad cuando más lo necesitábamos. La cooperativa es como una segunda familia.',
    avatar: avatar3,
  },
  {
    id: 't4',
    name: 'Roberto Jiménez Vargas',
    role: 'Miembro de la Red de Salud',
    quote: 'La atención médica ha sido excelente. Mis hijos tienen cobertura completa y eso me da mucha paz mental.',
    avatar: avatar4,
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: 'Gran Feria de Fin de Año 2024',
    date: '2024-12-15',
    excerpt: 'Más de 50 productores participarán en la feria más grande del año con ofertas especiales para asociados.',
    image: noticia1,
    category: 'Eventos',
  },
  {
    id: 'n2',
    title: 'Nuevo Convenio con Hospital Regional',
    date: '2024-11-28',
    excerpt: 'Ampliación de cobertura médica con descuentos adicionales en especialidades y cirugías electivas.',
    image: noticia2,
    category: 'Salud',
  },
  {
    id: 'n3',
    title: 'Capacitación en Agricultura Sostenible',
    date: '2024-11-10',
    excerpt: 'Taller gratuito para productores asociados sobre técnicas orgánicas y manejo eficiente de cultivos.',
    image: noticia3,
    category: 'Formación',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Lic. Patricia Solano Mora',
    role: 'Presidenta Ejecutiva',
    photo: equipo1,
    bio: 'Lidera la cooperativa desde 2018 con enfoque en desarrollo comunitario sostenible.',
  },
  {
    id: 'tm2',
    name: 'Ing. Marco Antonio Rojas',
    role: 'Director de Operaciones',
    photo: equipo2,
    bio: 'Especialista en logística y gestión de programas sociales con 15 años de experiencia.',
  },
  {
    id: 'tm3',
    name: 'Dra. Carmen Luisa Vega',
    role: 'Coordinadora de Salud',
    photo: equipo3,
    bio: 'Médica comunitaria dedicada a ampliar el acceso a servicios de salud preventiva.',
  },
  {
    id: 'tm4',
    name: 'Cont. Jorge Luis Herrera',
    role: 'Director Financiero',
    photo: equipo4,
    bio: 'Garantiza la transparencia financiera y el crecimiento sostenible del fondo cooperativo.',
  },
];

export const timelineEvents: TimelineEvent[] = [
  { year: '1970', title: 'Fundación de la Cooperativa', description: 'Un grupo de 45 familias funda la cooperativa con el objetivo de mejorar el acceso a alimentos.' },
  { year: '1978', title: 'Primera Feria de Consumo', description: 'Se realiza la primera feria con 12 productores locales y más de 200 asistentes.' },
  { year: '1986', title: 'Creación de la Red de Salud', description: 'Se establece convenio con clínicas locales para brindar atención médica a asociados.' },
  { year: '1995', title: 'Fondo Funerario', description: 'Nace el programa de apoyo funerario como respuesta a necesidades comunitarias.' },
  { year: '2003', title: 'Programa de Ahorro Comunitario', description: 'Se lanza el sistema de ahorro con tasas preferenciales y créditos blandos.' },
  { year: '2015', title: 'Expansión Digital', description: 'Digitalización de servicios y lanzamiento de plataforma en línea para asociados.' },
  { year: '2024', title: '3,000 Asociados Activos', description: 'La cooperativa alcanza la cifra histórica de más de 3,000 familias beneficiadas.' },
];

export const fairEvents: FairEvent[] = [
  {
    id: 'f1',
    name: 'Feria Semanal Centro',
    date: 'Todos los sábados',
    location: 'Plaza Bolívar, Barquisimeto',
    products: ['Frutas tropicales', 'Verduras orgánicas', 'Quesos artesanales', 'Miel pura'],
    image: feriaImg1,
  },
  {
    id: 'f2',
    name: 'Feria Dominical Norte',
    date: 'Todos los domingos',
    location: 'Parque Miranda, Barquisimeto',
    products: ['Panadería artesanal', 'Conservas caseras', 'Plantas ornamentales', 'Artesanías'],
    image: feriaImg2,
  },
  {
    id: 'f3',
    name: 'Feria Especial Fin de Mes',
    date: 'Último viernes de cada mes',
    location: 'Centro Comercial Los Samanes, Barquisimeto',
    products: ['Carnes frescas', 'Pescado del día', 'Lácteos', 'Granos básicos'],
    image: feriaImg3,
  },
  {
    id: 'f4',
    name: 'Feria Navideña Especial',
    date: '15-20 de diciembre',
    location: 'Recinto Ferial de Barquisimeto',
    products: ['Decoraciones navideñas', 'Dulces tradicionales', 'Ponche y rompope', 'Regalos artesanales'],
    image: feriaImg4,
  },
];

export const products: Product[] = [
  { id: 'p1', name: 'Tomates Orgánicos', producer: 'Finca La Esperanza', price: 'Bs. 1,20/kg', image: tomate, category: 'Vegetales' },
  { id: 'p2', name: 'Queso Fresco', producer: 'Lácteos Don Pedro', price: 'Bs. 35,00/unidad', image: queso, category: 'Lácteos' },
  { id: 'p3', name: 'Miel Pura de Abeja', producer: 'Apiarios del Valle', price: 'Bs. 48,00/frasco', image: miel, category: 'Endulzantes' },
  { id: 'p4', name: 'Plátanos Maduros', producer: 'Cooperativa Agrícola Sur', price: 'Bs. 8,00/docena', image: platano, category: 'Frutas' },
  { id: 'p5', name: 'Huevos de Gallina Libre', producer: 'Granja El Rosal', price: 'Bs. 24,00/cartón', image: huevo, category: 'Proteínas' },
  { id: 'p6', name: 'Café Tostado Artesanal', producer: 'Beneficio Monteverde', price: 'Bs. 52,00/bolsa', image: cafe, category: 'Bebidas' },
];

export const officeLocations: OfficeLocation[] = [
  {
    id: 'o1',
    name: 'Oficina Central',
    address: 'Av. Principal #45, Barquisimeto Centro',
    phone: '+58 251-222-3344',
    email: 'central@cooperativa5dejulio.com.ve',
    hours: 'Lunes a Viernes: 7:00 AM - 5:00 PM / Sábados: 8:00 AM - 12:00 PM',
    region: 'Barquisimeto',
  },
  {
    id: 'o2',
    name: 'Sucursal Norte',
    address: 'Calle 2, Av. 3, Barquisimeto Norte',
    phone: '+58 251-226-1556',
    email: 'norte@cooperativa5dejulio.com.ve',
    hours: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
    region: 'Barquisimeto',
  },
  {
    id: 'o3',
    name: 'Sucursal Sur',
    address: 'Boulevard Los Ilustres, Barquisimeto Sur',
    phone: '+58 251-244-1778',
    email: 'sur@cooperativa5dejulio.com.ve',
    hours: 'Lunes a Viernes: 8:00 AM - 4:00 PM / Sábados: 9:00 AM - 1:00 PM',
    region: 'Barquisimeto',
  },
  {
    id: 'o4',
    name: 'Punto de Atención Cabudar',
    address: 'Centro Comercial Plaza Mayor, Cabudar',
    phone: '+58 251-255-1990',
    email: 'cabudar@cooperativa5dejulio.com.ve',
    hours: 'Lunes a Viernes: 9:00 AM - 3:00 PM',
    region: 'Cabudar',
  },
];

export const faqItems: FAQItem[] = [
  { question: '¿Cómo puedo afiliarme a la cooperativa?', answer: 'Para afiliarse debe presentar su cédula de identidad, completar el formulario de inscripción y realizar un aporte inicial de Bs. 50,00. El proceso toma entre 3 y 5 días hábiles.', service: 'general' },
  { question: '¿Qué beneficios obtengo como asociado?', answer: 'Los asociados acceden a ferias de consumo con precios preferenciales, cobertura de salud subsidiada, fondo funerario, programa de ahorro con tasas preferenciales y participación en asambleas.', service: 'general' },
  { question: '¿Cuándo se realizan las Ferias de Consumo?', answer: 'Las ferias se realizan todos los sábados en Plaza Bolívar, domingos en Parque Miranda y el último viernes de cada mes en Los Samanes. Además hay ferias especiales en fechas festivas.', service: 'ferias' },
  { question: '¿Quiénes pueden acceder a la Red de Salud?', answer: 'Todos los asociados activos y sus familiares directos (cónyuge e hijos menores de 25 años) tienen acceso a consultas médicas, exámenes de laboratorio y atención dental básica.', service: 'salud' },
  { question: '¿Cómo funciona el Fondo Funerario?', answer: 'Mediante un aporte mensual de Bs. 25,00, el fondo cubre hasta 15.000.000 en gastos funerarios para el asociado y sus beneficiarios registrados. Incluye asesoría legal y acompañamiento.', service: 'sepelio' },
  { question: '¿Qué tasas de interés ofrece el Ahorro Comunitario?', answer: 'Las cuentas de ahorro generan un 4% anual. Los créditos para asociados tienen tasas desde 8% anual, significativamente menores que la banca tradicional.', service: 'ahorro' },
  { question: '¿Puedo ser productor en las Ferias de Consumo?', answer: 'Sí, cualquier asociado que produzca alimentos o artesanías puede participar como vendedor. Debe registrarse con anticipación y cumplir con los estándares de calidad establecidos.', service: 'ferias' },
  { question: '¿Qué documentos necesito para solicitar un crédito?', answer: 'Se requiere cédula de identidad, comprobante de ingresos, referencias comerciales y estar al día con las cuotas de la cooperativa. El monto máximo depende del historial de ahorro.', service: 'ahorro' },
];

export const documents: Document[] = [
  { id: 'd1', title: 'Estatutos de la Cooperativa', type: 'PDF', size: '2.4 MB', downloadUrl: '#' },
  { id: 'd2', title: 'Reglamento Interno', type: 'PDF', size: '1.8 MB', downloadUrl: '#' },
  { id: 'd3', title: 'Informe Anual 2023', type: 'PDF', size: '5.1 MB', downloadUrl: '#' },
  { id: 'd4', title: 'Formulario de Afiliación', type: 'PDF', size: '0.5 MB', downloadUrl: '#' },
  { id: 'd5', title: 'Guía de Servicios', type: 'PDF', size: '3.2 MB', downloadUrl: '#' },
];
