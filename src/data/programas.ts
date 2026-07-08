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
    titulo: 'Bachillerato en Teología',
    nivel: 'Pregrado',
    modalidad: 'Videoconferecia',
    duracion: '4 años',
    descripcion:
      'Fundamentos bíblicos y teológicos para el servicio ministerial en la iglesia local y la comunidad.',
    icono: 'lucide:book-open',
  },
  {
    titulo: 'Licenciatura en Teología',
    nivel: 'Pregrado',
    modalidad: 'Virtual',
    duracion: '2 años',
    descripcion:
      'Formación teológica integral de nivel universitario, orientada al ministerio pastoral y la investigación académica. En convenio con el Seminario Teológico Nazareno del Cono Sur',
    icono: 'lucide:graduation-cap',
  },

  // {
  //   titulo: 'Diploma en Ministerio Cristiano',
  //   nivel: 'Técnico',
  //   modalidad: 'Semipresencial',
  //   duracion: '1 año',
  //   descripcion:
  //     'Capacitación práctica para líderes laicos y ministros en formación, con énfasis en el servicio comunitario.',
  //   icono: 'lucide:award',
  // },
  // {
  //   titulo: 'Educación Continua y Extensión',
  //   nivel: 'Extensión',
  //   modalidad: 'Flexible',
  //   duracion: 'Variable',
  //   descripcion:
  //     'Cursos y talleres de actualización ministerial para pastores, líderes y toda la comunidad eclesial.',
  //   icono: 'lucide:users',
  // },
];
