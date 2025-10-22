import { motion } from 'framer-motion'
import useContactForm from '../hooks/useContactForm'
import { profile } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { InfoChip, SectionWrapper, SocialLink } from './common'

const ContactSection = () => {
  const email = profile.contact.email?.trim() ? profile.contact.email : undefined
  const phone = profile.contact.phone?.trim() ? profile.contact.phone : undefined

  const { status, handleSubmit } = useContactForm({
    endpoint: 'https://formsubmit.co/ajax/francochisan31@gmail.com',
    ccEmail: email,
  })

  return (
    <SectionWrapper
      id="contacto"
      eyebrow="Contacto"
      title="Ponte en contacto conmigo 🚀"
      description="Abierto a oportunidades de prácticas y proyectos de desarrollo."
    >
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-surface/80 p-10 shadow-glow-surface backdrop-blur lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="space-y-6 text-sm text-slate-300"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp}>
            Soy estudiante de Ingeniería de Sistemas en búsqueda de una oportunidad de{' '}
            <strong> prácticas preprofesionales</strong> en desarrollo de software o TI. Si estás
            buscando a alguien responsable, con ganas de aprender y aportar desde el primer día, me
            encantaría conversar contigo. Puedes escribirme directamente o usar el formulario de
            contacto.
          </motion.p>
          <motion.div variants={fadeInUp} className="space-y-3">
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              {email ? <InfoChip label={email} /> : null}
              {phone ? <InfoChip label={phone} /> : null}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <SocialLink key={social.href} link={{ ...social, newTab: true }} />
            ))}
          </motion.div>
        </motion.div>

        <motion.form className="space-y-4" onSubmit={handleSubmit} variants={fadeInUp}>
          <div>
            <label htmlFor="nombre" className="text-sm font-medium text-white">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="¿Cómo te llamas?"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300/40"
              required
            />
          </div>
          <div>
            <label htmlFor="correo" className="text-sm font-medium text-white">
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="name@empresa.com"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300/40"
              required
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="text-sm font-medium text-white">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntame sobre la oportunidad..."
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300/40"
              required
            />
          </div>
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-2xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-glow-primary transition hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 disabled:cursor-not-allowed disabled:opacity-70"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
          </motion.button>
          {status === 'success' ? (
            <motion.p
              className="text-sm font-medium text-primary-100"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ¡Gracias! Ya recibí tu mensaje y te responderé pronto. 🚀
            </motion.p>
          ) : null}
          {status === 'error' ? (
            <motion.p
              className="text-sm font-medium text-red-300"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Ocurrió un error al enviar el mensaje. Intenta nuevamente en unos minutos.
            </motion.p>
          ) : null}
        </motion.form>
      </div>
    </SectionWrapper>
  )
}

export default ContactSection
