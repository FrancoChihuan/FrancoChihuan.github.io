import { motion } from 'framer-motion'
import imagenProfile from '../assets/FotoProfesional.webp'
import { profile } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'

const Hero = () => {
  const curriculumLink = profile.socials.find((social) => social.download)

  return (
    <section id="inicio" className="relative z-40">
    <div className="h-[92px] md:h-16 lg:h-20" />

    <div className="container relative flex justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface/70 px-6 py-20 shadow-[0_40px_120px_rgba(29,95,255,0.24)] backdrop-blur md:px-16 lg:px-24">
      <div className="pointer-events-none absolute -left-10 top-16 h-48 w-48 rounded-full bg-primary-500/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 top-6 h-32 w-32 rounded-full bg-primary-700/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-4 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-primary-400/35 blur-2xl" />

      <motion.div
        className="flex max-w-3xl flex-col items-center gap-12 text-center"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-200 shadow-glow-primary">
            {profile.role}
          </span>
          <motion.div variants={fadeInUp} className="max-w-md rounded-[2rem] p-6">
            <div className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72">
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-primary-500/35 to-primary-700/15 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary-400/50 shadow-[0_20px_45px_rgba(29,95,255,0.35)]">
                <img
                  src={imagenProfile}
                  alt="Foto de Franco Chihuan"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          <h1 className="font-display text-4xl leading-tight text-white md:text-5xl">
            Hola, soy {profile.name.split(' ')[0]}
          </h1>
          <p className="text-lg text-slate-300">
            Tengo conocimientos sólidos en desarrollo full stack con Django Rest Framework, bases de
            datos (MySQL, SQL Server), React y Tailwind. Soy proactivo, aprendo rápido, me adapto con
            facilidad a nuevos entornos y disfruto trabajar en equipo. Me motiva asumir retos que me
            permitan crecer profesionalmente y aportar soluciones prácticas dentro del área de
            tecnología. Actualmente en busca de prácticas preprofesionales como developer junior.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-200">
              Surquillo, Lima | Bellavista, Callao.
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-200">
              En busca de prácticas pre profesionales como Developer junior.
            </span>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-4">
          <motion.a
            href="#proyectos"
            className="order-1 inline-flex w-full max-w-[220px] items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 md:order-2 md:w-auto md:max-w-none"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 0.3,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver mis proyectos
            <span aria-hidden="true">→</span>
          </motion.a>
          <motion.a
            href="#contacto"
            className="order-2 inline-flex w-full max-w-[220px] items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 md:order-1 md:w-auto md:max-w-none"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Contactame
          </motion.a>
          <motion.a
            href={curriculumLink?.href ?? '#'}
            download
            className="order-3 inline-flex w-full max-w-[220px] items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 md:order-3 md:w-auto md:max-w-none"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            {curriculumLink?.label ?? 'Currículum'}
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
    </section>
  )
}

export default Hero
