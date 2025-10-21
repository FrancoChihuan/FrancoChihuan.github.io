import { motion } from 'framer-motion'
import { certifications } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { SectionWrapper, SocialLink } from './common'

const CertificationsSection = () => (
  <SectionWrapper
    id="certificaciones"
    eyebrow="Aprendizaje continuo"
    title="Certificaciones relevantes 🎓"
    description="Formación complementaria que refuerza y avala mis conocimientos."
  >
    <motion.div
      className="grid gap-6 md:grid-cols-2"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {certifications.map((cert) => (
        <motion.div
          key={cert.title}
          variants={fadeInUp}
          whileHover={{ y: -6 }}
          className="glass-panel border border-white/10 p-6"
        >
          <h3 className="font-display text-lg text-white">{cert.title}</h3>
          <p className="mt-2 text-sm text-primary-100">
            {cert.issuer} · {cert.date}
          </p>
          {cert.credentialId ? (
            <p className="mt-2 text-xs text-slate-400">ID: {cert.credentialId}</p>
          ) : null}
          {cert.link ? (
            <div className="mt-4">
              <SocialLink link={cert.link} />
            </div>
          ) : null}
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
)

export default CertificationsSection
