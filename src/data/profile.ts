export type Link = {
  label: string
  href: string
}

export type SkillCategory = {
  title: string
  items: string[]
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
  name: 'Franco Chisán',
  role: 'Estudiante de Ingeniería de Sistemas (8vo ciclo)',
  headline:
    'Construyo soluciones digitales centradas en las personas y con foco en la calidad del software.',
  summary:
    'Me apasiona conectar la ingeniería con las necesidades del negocio. Disfruto trabajar con equipos multidisciplinarios, automatizar procesos y convertir ideas en productos funcionales con impacto.',
  location: 'Lima, Perú',
  availability: 'Disponible para prácticas pre profesionales y proyectos freelance.',
  contact: {
    email: 'tu.correo@ejemplo.com',
    phone: '+51 900 000 000',
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Correo', href: 'mailto:tu.correo@ejemplo.com' },
  ] satisfies Link[],
}

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vitest', 'Redux Toolkit'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Herramientas',
    items: ['Git & GitHub', 'Figma', 'Docker', 'Notion', 'Jira'],
  },
  {
    title: 'Competencias',
    items: ['Análisis de requerimientos', 'Diseño de arquitectura', 'Scrum', 'Testing automatizado'],
  },
]

export const projects: Project[] = [
  {
    title: 'MiUSIL Planner',
    description:
      'Aplicación web que integra los datos académicos de la universidad para generar horarios óptimos, recordatorios inteligentes y seguimiento de tareas.',
    highlights: [
      'Algoritmo de compatibilidad de horarios con TypeScript y heurísticas de grafos.',
      'Integración con calendario de Google mediante API REST y autenticación OAuth.',
      'Diseño responsivo centrado en estudiantes que necesitan organizar su ciclo académico.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
    link: { label: 'Demo', href: '#' },
    repo: { label: 'GitHub', href: '#' },
  },
  {
    title: 'Sistema de Monitoreo de Laboratorios',
    description:
      'Dashboard para controlar el inventario y mantenimiento de laboratorios de cómputo, con alertas tempranas y reportes automáticos.',
    highlights: [
      'Modelado de base de datos y endpoints REST documentados con OpenAPI.',
      'Uso de WebSockets para actualizar en tiempo real el estado de equipos.',
      'Automatización de reportes en PDF programados con colas de trabajos.',
    ],
    tags: ['React', 'Tailwind', 'Express', 'MongoDB', 'Socket.IO'],
  },
  {
    title: 'Observatorio de Datos Públicos',
    description:
      'Portal de visualización de indicadores gubernamentales y económicos para analizar tendencias con gráficos interactivos.',
    highlights: [
      'ETL con Python para limpiar datasets abiertos y cargarlos en PostgreSQL.',
      'Consultas optimizadas y capa de API con cache en Redis.',
      'Componentes reutilizables de visualización con D3 y Recharts.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'D3', 'PostgreSQL'],
    link: { label: 'Ver proyecto', href: '#' },
  },
]

export const experiences: Experience[] = [
  {
    title: 'Líder Técnico - Proyecto Integrador',
    organization: 'Universidad San Ignacio de Loyola',
    period: '2024 - Actualidad',
    description:
      'Coordiné a un equipo de 5 estudiantes para construir una plataforma web que digitaliza procesos administrativos de la facultad.',
    achievements: [
      'Diseñé la arquitectura modular y definí las historias de usuario junto al Product Owner.',
      'Organicé sprints de dos semanas, ceremonias Scrum y tableros Kanban con métricas de entrega.',
      'Implementé pruebas automatizadas de componentes y revisión continua del código en GitHub.',
    ],
  },
  {
    title: 'Mentor Académico de Programación',
    organization: 'Laboratorio de Innovación USIL',
    period: '2023 - 2024',
    description:
      'Acompañé a estudiantes de ciclos iniciales en la construcción de proyectos web y fundamentos de estructuras de datos.',
    achievements: [
      'Preparé sesiones hands-on sobre React, diagramas UML y buenas prácticas de versionamiento.',
      'Desarrollé rúbricas de evaluación y guías de ejercicios reutilizables por el laboratorio.',
    ],
  },
]

export const education: Education = {
  program: 'Ingeniería de Sistemas - 8vo ciclo',
  school: 'Universidad San Ignacio de Loyola',
  period: '2020 - Actualidad',
  details: [
    'Mención destacada en cursos de Arquitectura de Software y Gestión de Proyectos.',
    'Miembro activo del capítulo estudiantil IEEE Computer Society.',
    'Participación en hackathons universitarios y proyectos de innovación educativa.',
  ],
}
