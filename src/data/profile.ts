export type Link = {
  label: string
  href: string
  newTab?: boolean
  download?: boolean
}

export type SkillCategory = {
  title: string
  items: string[]
}

export type Certification = {
  title: string
  issuer: string
  date: string
  credentialId?: string
  link?: Link
}

export type Project = {
  title: string
  description: string
  highlights: string[]
  tags: string[]
  link?: Link
  repo?: Link
}

export type ExperienceActionIcon =
  | 'globe'
  | 'instagram'
  | 'whatsapp'
  | 'external'
  | 'folder'

export type ExperienceAction = Link & {
  icon: ExperienceActionIcon
}

export type Experience = {
  title: string
  organization: string
  period: string
  description: string
  achievements: string[]
  actions?: ExperienceAction[]
}

export type Education = {
  program: string
  school: string
  period: string
  details: string[]
}

export const profile = {
  name: 'Franco Chihuan Sánchez',
  role: 'Estudiante de Ingeniería de Sistemas · Universidad San Ignacio de Loyola · 8.º ciclo',
  headline:
    'Information Systems Engineering Student | Backend Developer | Founder of Train Smart',
  summary:
    'Tengo conocimientos sólidos en desarrollo backend utilizando Python (Django Rest Framework) y experiencia en tecnologías frontend como React, HTML y CSS. Manejo bases de datos relacionales (MySQL, SQL Server, Oracle) y no relacionales como MongoDB. Busco potenciar productos digitales con arquitecturas limpias y APIs seguras.',
  location: 'Lima, Perú',
  availability: 'En busca de prácticas pre profesionales como Developer junior.',
  contact: {
    email: 'francochisan31@gmail.com',
    phone: '+51 904 487 497',
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/francochihuan/', newTab: true },
    { label: 'GitHub', href: 'https://github.com/FrancoChihuan', newTab: true },
    { label: 'Currículum', href: '/miPDF/currículum_franco_chihuan_s.pdf', download: true },
  ] satisfies Link[],
  // languages: ['Inglés B1 - B2', 'Español (nativo)'],
}

export const skills: SkillCategory[] = [
  {
    title: 'Lenguajes',
    items: [
      'Python',
      'JavaScript',
      'Java',
      'C++',
      'Php',
      'TypeScript',
    ],
  },
  {
    title: 'Backend',
    items: [
      'DjangoRF',
      'Node.js',
      'JSON Web Tokens',
      'Seguridad',
      '.NET',
      'Manejo de ORM',
    ],
  },
  {
    title: 'Frontend',
    items: [
      'React',  
      'TypeScript',
      'TailwindCSS',
      'HTML5',
      'Bootstrap',
      'Vite',
    ],
  },
  {
    title: 'Bases de datos',
    items: [
      'MySQL', 
      'SQL Server', 
      'Oracle', 
      'PostgreSQL', 
      'MongoDB',
      'Administración BD',
    ],
  },
  {
    title: 'Tecnologías de Desarrollo',
    items: [
      'GitHub', 
      'Docker', 
      'AWS', 
      'Postman', 
      'Git',
      'Linux',
    ],
  },
  {
    title: 'Idiomas',
    items: [ 
      'Inglés intermedio', 
      'Español (nativo)' 
    ],
  },
  {
    title: 'Habilidades Blandas',
    items: [
      'Comunicación efectiva', 
      'Trabajo en equipo',
      'Resolución de problemas',
      'Trabajo bajo presión',
      'Aprendizaje rápido',
      'Adaptabilidad',
    ],
  },
  {
    title: 'Herramientas Microsoft',
    items: [
      'Word', 
      'Excel',
      'PowerPoint',
      'Power BI',
      'Power Automate',
      'Power Apps',
    ],
  },

]

export const projects: Project[] = [
  {
    title: 'Train Smart',
    description:
      'Plataforma fitness que ayuda a deportistas aficionados a planificar entrenamientos personalizados y hacer seguimiento de métricas de desempeño.',
    highlights: [
      'API REST construida con Django Rest Framework para gestionar rutinas, objetivos y progreso.',
      'Integración de métricas de salud mediante formularios dinámicos y reportes descargables.',
      'Diseño responsivo con React orientado a ofrecer una experiencia motivadora y clara.',
    ],
    tags: ['Django REST', 'React', 'Tailwind CSS', 'PostgreSQL'],
    link: { label: 'GitHub', href: 'https://github.com/FrancoChihuan' },
  },
  {
    title: 'API de reservas para laboratorios académicos',
    description:
      'Servicio backend diseñado para gestionar reservas de laboratorios en la universidad, con reportes de uso y control de disponibilidad.',
    highlights: [
      'Endpoints REST documentados con OpenAPI y pruebas unitarias con PyTest.',
      'Automatización de notificaciones por correo y registro de historial de uso.',
      'Despliegue en AWS con prácticas básicas de CI/CD y monitoreo de logs.',
    ],
    tags: ['Django REST', 'AWS', 'CI/CD', 'MySQL'],
    // repo: { label: 'Código (privado)', href: 'https://www.linkedin.com/in/francochihuan/' },
    link: { label: 'GitHub', href: 'https://github.com/FrancoChihuan' },
  },
  {
    title: 'Dashboard de analítica deportiva',
    description:
      'Aplicación web que visualiza datos de entrenamiento y progreso físico para equipos universitarios.',
    highlights: [
      'Extracción y transformación de métricas con Python para alimentar gráficas interactivas.',
      'Componentes reutilizables con React y Tailwind que facilitan nuevas visualizaciones.',
      'Persistencia en MongoDB para historial de sesiones y evaluaciones comparativas.',
    ],
    tags: ['React', 'Tailwind', 'MongoDB', 'Visualización de datos'],
    link: { label: 'GitHub', href: 'https://github.com/FrancoChihuan' },
  },
]

export const experiences: Experience[] = [
  {
    title: 'Negocio Propio - Train Smart',
    organization: 'Fundador, Gestor y Desarrollador Principal',
    period: '2022 - Actualidad',
    description:
      'Fundé el negocio a los 18 años, consolidando una marca de coaching fitness y nutrición personalizada que ha atendido a más de 1600 clientes de manera online y presencial. Diseñé el sitio web del negocio con React, Vite y TailwindCSS. Actualmente lidero un equipo de coaches y nutricionistas, garantizando un servicio personalizado y resultados visibles para los clientes.',
    achievements: [ 
      'Diseñé y desarrollé un sitio web responsivo que mejoró la experiencia del usuario y aumentó las conversiones.',
      'Incrementé la base de clientes en un 30% en el último año mediante campañas de marketing digital.',
      'Desarrollé un sistema de seguimiento de progreso para los clientes, mejorando la retención en un 25%.',
    ],
    actions: [
      {
        label: 'Sitio web',
        href: 'https://trainsmart.pe',
        icon: 'globe',
        newTab: true,
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/trainsmartpe',
        icon: 'instagram',
        newTab: true,
      },
      {
        label: 'Catálogo',
        href: 'https://wa.me/c/51986537841',
        icon: 'whatsapp',
        newTab: true,
      },
    ],
  },
  {
    title: 'Freelancer - Landing Page',
    organization: 'Multiservicios Tecniconf',
    period: '2025',
    description: // florea mas en la descripcion
      'Diseñé y desarrollé una landing page para presentación de servicios y captación de leads. Estructura moderna y Responsiva. Colaboré estrechamente con el cliente para asegurar que el diseño y las funcionalidades cumplieran con sus expectativas y necesidades comerciales. Además, implementé herramientas de análisis para monitorear el tráfico y el comportamiento de los usuarios en el sitio.',
    achievements: [
      'Integré componentes en React con Tailwind y Vite resultando en una web rápida y atractiva.',
      'Implementé un formulario de contacto para mejorar la captación de leads.',
      'Pixeles de Meta y Google Analytics implementados para seguimiento de usuarios.',
    ],
    actions: [
      {
        label: 'Ver landing page',
        href: 'https://www.tecniconf.com',
        icon: 'globe',
        newTab: true,
      },
    ],
  },
  {
    title: 'Freelance - Portafolios Web',
    organization: 'Portafolios web para estudiantes universitarios',
    period: '2024 - Actualidad',
    description:
      'Diseñé y desarrollé portafolios web personalizados para compañeros universitarios que buscaban proyectar una imagen más profesional en su presentación laboral.',
    achievements: [
      'Desarrollé portafolios con React, Vite y TailwindCSS, adaptados a las necesidades de cada estudiante.',
      'Asesoré sobre mejores prácticas de diseño y usabilidad web.',
      'Implementé formularios de contacto y enlaces a redes sociales para mejorar la interacción con potenciales empleadores.',
      'Recibí feedback positivo que destacó la profesionalidad y funcionalidad de los portafolios entregados.',
    ],
    actions: [
      {
        label: 'Ver portafolios',
        href: '#proyectos',
        icon: 'folder',
      },
    ],
  },
  {
    title: 'Asistente académico y tutor',
    organization: 'Universidad San Ignacio de Loyola',
    period: '2023 - Actualidad',
    description:
      'Brindé apoyo académico a estudiantes de ciclos inferiores en cursos clave como Estructuras de Datos, Programación Orientada a Objetos y Bases de Datos. Organicé sesiones de estudio y talleres prácticos para reforzar conceptos complejos, utilizando ejemplos reales y ejercicios interactivos.',
    achievements: [
      'Organicé sesiones de estudio para resolver ejercicios de SQL, estructuras de datos y POO.',
      'Compartí guías sobre control de versiones con Git y despliegues básicos en la nube.',
      'Fomenté un ambiente colaborativo que mejoró el rendimiento académico del grupo.',
      'Recibí reconocimiento por parte de profesores y estudiantes por mi dedicación y claridad en las explicaciones.',
    ],
  },
]

export const education: Education = {
  program: 'Ingeniería de Sistemas de la Información (8.º ciclo)',
  school: 'Universidad San Ignacio de Loyola',
  period: 'Mar 2022 - Dic 2027',
  details: [
    'Integrante del equipo de futsal universitario reforzando liderazgo y disciplina.',
    'Enfoque académico en Django REST, GitHub, bases de datos SQL y patrones de arquitectura.',
    'Participación activa en comunidades tecnológicas y proyectos estudiantiles.',
  ],
}

export const certifications: Certification[] = [
  {
    title: 'Django Rest Framework - Avanzado',
    issuer: 'Udemy',
    date: 'Octubre 2025',
    credentialId: 'UC-a1c08342-93ee-4c08-9fc2-a346a1a9b2b1',
    link: {
      label: 'Mostrar credencial',
      href: 'https://www.udemy.com/certificate/UC-a1c08342-93ee-4c08-9fc2-a346a1a9b2b1/',
      newTab: true,
    },
  },
  {
    title: 'Git + GitHub: Todo un sistema de control de versiones de cero',
    issuer: 'Udemy',
    date: 'Octubre 2025',
    credentialId: 'UC-1ed70982-0d2b-444d-8c8a-ddb9990c8f0a',
    link: {
      label: 'Mostrar credencial',
      href: 'https://www.udemy.com/certificate/UC-1ed70982-0d2b-444d-8c8a-ddb9990c8f0a/',
      newTab: true,
    },
  },
  {
    title: 'CLOUD COMPUTING: AWS - AZURE - GOOGLE CLOUD',
    issuer: 'Universidad Nacional de Ingeniería',
    date: 'Febrero 2025',
    credentialId: '017 - 0016705',
    link: {
      label: 'Mostrar credencial',
      href: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_62dee2ab1099c4d3012583294d87a66a',
      newTab: true,
    },
  },
  {
    title: 'SQL SERVER - Base de datos',
    issuer: 'Universidad Nacional de Ingeniería',
    date: 'Enero 2025',
    credentialId: '017 - 0020988',
    link: {
      label: 'Mostrar credencial',
      href: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_0123e50419e90c9f1d8a77cb42b28b38',
      newTab: true,
    },
  },
  {
    title: 'Machine Learning con Python',
    issuer: 'Universidad Nacional de Ingeniería',
    date: 'Febrero 2025',
    credentialId: '017 -0028828',
    link: {
      label: 'Mostrar credencial',
      href: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_e304e21bbe941740518340b5dbb611ec',
      newTab: true,
    },
  },
]
