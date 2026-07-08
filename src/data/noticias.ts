export interface Noticia {
  titulo: string;
  extracto: string;
  categoria: string;
  fecha: string;
  imagen: string;
  slug: string;
}

export const noticias: Noticia[] = [
  {
    titulo: 'Inicio del nuevo año académico 2025',
    extracto:
      'Con una emotiva ceremonia de bienvenida, el Seminario Bíblico Nazareno de Chile dio inicio a un nuevo año académico lleno de desafíos y oportunidades para la formación ministerial.',
    categoria: 'Académico',
    fecha: '2025-03-01',
    imagen: '/images/noticia-1.jpg',
    slug: 'inicio-ano-academico-2025',
  },
  {
    titulo: 'Conferencia Internacional de Teología Wesleyana',
    extracto:
      'Importantes teólogos de toda América Latina se reunieron en nuestro campus para reflexionar sobre los desafíos contemporáneos de la teología Arminiana-wesleyana.',
    categoria: 'Evento',
    fecha: '2025-02-15',
    imagen: '/images/noticia-2.jpg',
    slug: 'conferencia-teologia-wesleyana',
  },
  {
    titulo: 'Graduación Promoción 2024',
    extracto:
      'Celebramos con alegría y gratitud a los 28 nuevos graduados que recibieron sus títulos y diplomas ministeriales en una ceremonia solemne junto a sus familias e iglesias.',
    categoria: 'Graduación',
    fecha: '2024-12-10',
    imagen: '/images/noticia-3.jpg',
    slug: 'graduacion-promocion-2024',
  },
];

export function formatFecha(fecha: string): string {
  return new Date(fecha + 'T12:00:00').toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
