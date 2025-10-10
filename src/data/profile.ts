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

export type Experience = {
  title: string
  organization: string
  period: string
  description: string
  achievements: string[]
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
    { label: 'Curriculum Vitae', href: '/miPDF/Curriculum_Vitae.pdf', download: true },
  ] satisfies Link[],
  languages: ['Inglés B1 - B2', 'Español (nativo)'],
}

export const skills: SkillCategory[] = [
  {
    title: 'Backend',
    items: [
      'Django REST Framework',
      'Node.js',
      'Autenticación y seguridad',
      'Arquitectura limpia',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'UI responsiva'],
  },
  {
    title: 'Bases de datos',
    items: ['MySQL', 'SQL Server', 'Oracle', 'MongoDB', 'Modelado de datos'],
  },
  {
    title: 'Herramientas y prácticas',
    items: ['Git & GitHub', 'Docker', 'Cloud', 'Documentación técnica', 'Trabajo en equipo'],
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
    title: 'Founder & Backend Developer',
    organization: 'Train Smart',
    period: '2022 - Actualidad',
    description:
      'Creé una plataforma de entrenamiento inteligente que promueve hábitos saludables mediante rutinas personalizadas y seguimiento de objetivos.',
    achievements: [
      'Diseñé la arquitectura backend basada en Django Rest Framework y principios de APIs escalables.',
      'Definí el modelo de datos para rutinas, métricas y progreso semanal optimizando consultas.',
      'Dirigí pruebas con usuarios y mejoras continuas en la experiencia frontend desarrollada con React.',
    ],
  },
  {
    title: 'Asistente académico y tutor',
    organization: 'Universidad San Ignacio de Loyola',
    period: '2023 - 2024',
    description:
      'Apoyé a compañeros en cursos de programación y bases de datos, reforzando conceptos clave y buenas prácticas.',
    achievements: [
      'Organicé sesiones de estudio para resolver ejercicios de SQL, estructuras de datos y POO.',
      'Compartí guías sobre control de versiones con Git y despliegues básicos en la nube.',
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
