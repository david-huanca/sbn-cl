export interface Programa {
  titulo: string;
  nivel: string;
  modalidad: string;
  duracion: string;
  descripcion: string;
  icono: string;
}

export const programas: Programa[] = [
  {
    titulo: 'Licenciatura en Teología',
    nivel: 'Grado',
    modalidad: 'Presencial',
    duracion: '4 años',
    descripcion:
      'Formación teológica integral de nivel universitario, orientada al ministerio pastoral y la investigación académica.',
    icono: 'lucide:graduation-cap',
  },
  {
    titulo: 'Bachillerato en Teología',
    nivel: 'Pregrado',
    modalidad: 'Presencial',
    duracion: '2 años',
    descripcion:
      'Fundamentos bíblicos y teológicos para el servicio ministerial en la iglesia local y la comunidad.',
    icono: 'lucide:book-open',
  },
  {
    titulo: 'Diploma en Ministerio Cristiano',
    nivel: 'Técnico',
    modalidad: 'Semipresencial',
    duracion: '1 año',
    descripcion:
      'Capacitación práctica para líderes laicos y ministros en formación, con énfasis en el servicio comunitario.',
    icono: 'lucide:award',
  },
  {
    titulo: 'Educación Continua y Extensión',
    nivel: 'Extensión',
    modalidad: 'Flexible',
    duracion: 'Variable',
    descripcion:
      'Cursos y talleres de actualización ministerial para pastores, líderes y toda la comunidad eclesial.',
    icono: 'lucide:users',
  },
];
