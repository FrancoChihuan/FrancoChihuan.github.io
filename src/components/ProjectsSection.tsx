import { motion } from 'framer-motion'
import { projects } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { SectionWrapper, SocialLink } from './common'

const ProjectsSection = () => (
  <SectionWrapper
    id="proyectos"
    eyebrow="Portafolio"
    title="Proyectos que cuentan mi historia"
    description="Casos donde apliqué los conocimientos que he adquirido para resolver necesidades reales."
  >
    <motion.div
      className="grid gap-8 lg:grid-cols-2"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((project) => (
        <motion.article
          key={project.title}
          variants={fadeInUp}
          whileHover={{ y: -6 }}
          className="group glass-panel border border-white/10 p-8 transition hover:border-primary-500/30 hover:bg-primary-500/10 backdrop-blur"
        >
          <h3 className="font-display text-2xl text-white transition group-hover:text-primary-200">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-300">{project.description}</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1 text-lg text-primary-200">☆</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-primary-100">
            {project.link ? <SocialLink link={{ ...project.link, newTab: true }} /> : null}
            {project.repo ? <SocialLink link={{ ...project.repo, newTab: true }} /> : null}
          </div>
        </motion.article>
      ))}
    </motion.div>
  </SectionWrapper>
)

export default ProjectsSection
