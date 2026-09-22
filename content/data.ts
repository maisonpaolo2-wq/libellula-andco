export const site = {
  name: 'Libellula and Co',
  tagline: 'Alquiler, decoración y wedding styling en Tenerife',
  description:
    'En Libellula and Co transformamos cada espacio en una experiencia sensorial. Desde Tenerife, diseñamos y ambientamos eventos con mobiliario seleccionado, decoración floral y wedding styling que cuentan historias.',
  url: 'https://libellulaandco.com',
  email: 'info@libellulaandco.com',
  whatsapp: '34660452950',
  whatsappMessage: 'Hola, me gustaría pedir información sobre vuestros servicios.',
  instagram: 'libellula.and.co',
  location: 'Tenerife, Islas Canarias',
  ogImage: '/og-image.jpg',
}

export const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Nosotras', href: '#nosotras' },
  { label: 'Contacto', href: '#contacto' },
]

export const services = [
  {
    id: 'alquiler',
    name: 'Alquiler de mobiliario y menaje',
    description:
      'Sillas rattan, espejos dorados, pedestales, candelabros de cristal, vajilla y cristalería cuidadosamente seleccionados. Cada pieza elegida para que encaje en tu visión.',
    detail:
      'Disponemos de un catálogo amplio de mobiliario y menaje para bodas, eventos corporativos y celebraciones privadas en Tenerife. Entrega, montaje y recogida incluidos.',
    photo: '/photos/portfolio-1.jpg',
  },
  {
    id: 'decoracion',
    name: 'Decoración de eventos',
    description:
      'Instalaciones florales, arcos, doseles y ambientación completa. Trabajamos contigo desde el primer moodboard hasta el último detalle del día.',
    detail:
      'Creamos atmósferas únicas que reflejan tu personalidad. Flores, texturas, luz y composición en perfecta armonía para que cada rincón sea fotografiable.',
    photo: '/photos/portfolio-2.jpg',
  },
  {
    id: 'styling',
    name: 'Wedding Styling',
    description:
      'Coordinamos la estética global de tu boda: paleta, texturas, iluminación y escenografía. Una visión coherente de principio a fin.',
    detail:
      'Desde la papelería hasta el acceso de ceremonias, diseñamos cada elemento visual de tu boda para que cuente una historia reconocible y emocionante.',
    photo: '/photos/portfolio-3.jpg',
  },
]

export const process = [
  {
    number: '01',
    title: 'Cuéntanos tu visión',
    description:
      'Una primera llamada de 30 minutos para entender tu estilo, tu historia y cómo quieres sentirte ese día. Sin formularios, sin presión.',
  },
  {
    number: '02',
    title: 'Diseñamos juntas',
    description:
      'Moodboard, selección de piezas y presupuesto detallado. Todo por escrito, sin sorpresas ni costes ocultos.',
  },
  {
    number: '03',
    title: 'Montamos con mimo',
    description:
      'Llegamos antes que nadie, lo dejamos perfecto y permanecemos disponibles durante el evento para que nada falle.',
  },
  {
    number: '04',
    title: 'Tú disfruta',
    description:
      'El día que soñaste, vivido sin estrés. Nosotras nos encargamos de que todo quede exactamente como en las fotos.',
  },
]

export const portfolio = [
  { src: '/photos/portfolio-1.jpg', alt: 'Boda boho en Golf Costa Adeje con silla pavo real rattan', tall: true },
  { src: '/photos/portfolio-2.jpg', alt: 'Seating chart espejo dorado con sobres rosa y pampas', tall: false },
  { src: '/photos/portfolio-3.jpg', alt: 'Chandelier de cristal y detalle decoración Tenerife', tall: false },
  { src: '/photos/portfolio-4.jpg', alt: 'Boda en la playa, primer beso a pie de arena', tall: true },
  { src: '/photos/portfolio-5.jpg', alt: 'Vista aérea ceremonia nupcial en playa de Tenerife', tall: false },
  { src: '/photos/portfolio-6.jpg', alt: 'Arco floral con drapeado blanco en finca de Tenerife', tall: false },
  { src: '/photos/portfolio-7.jpg', alt: 'Boda Holly y Matthew, ceremonia floral con peonias blancas', tall: true },
  { src: '/photos/portfolio-8.jpg', alt: 'Pareja de novios bajo palmeras, Tenerife South', tall: false },
]

export const testimonials = [
  {
    quote:
      'Libellula transformo nuestra boda en un sueno que ni imaginabamos posible. Cada rincon contaba nuestra historia y los invitados aun nos preguntan quien lo hizo.',
    author: 'Sara y Miguel',
    event: 'Boda en Costa Adeje, 2024',
    rating: 5,
  },
  {
    quote:
      'El alquiler del mobiliario fue perfecto. Todo llego impecable, el montaje fue rapido y, al terminar, recogieron sin que tuvieramos que preocuparnos de nada.',
    author: 'Marta Lopez',
    event: 'Evento corporativo, Tenerife 2024',
    rating: 5,
  },
  {
    quote:
      'Su vision para el wedding styling fue exactamente lo que buscabamos. Detallistas, profesionales y con un gusto exquisito. Lo repetiria sin dudarlo.',
    author: 'Ana y David',
    event: 'Boda en finca de Tenerife, 2025',
    rating: 5,
  },
]

export const about = {
  title: 'Nacimos para hacer bonito',
  paragraphs: [
    'Libellula and Co es un estudio de decoracion y alquiler de mobiliario con base en Tenerife. Llevamos anos creando espacios que emocionan, desde bodas intimas en la orilla del mar hasta grandes celebraciones en fincas con historia.',
    'Nos mueve la atencion al detalle, la estetica honesta y la capacidad de transformar cualquier espacio en algo que no habia visto antes. Si buscas que tu evento sea recordado, hablamos.',
  ],
  photo: '/photos/about.jpg',
}
