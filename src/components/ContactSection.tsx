import { motion } from 'framer-motion'
import useContactForm from '../hooks/useContactForm'
import { profile } from '../data/profile'
import { fadeInUp, staggerChildren } from './animations'
import { SectionWrapper } from './common'
import { ArrowDownTrayIcon, ArrowUpRightIcon, EnvelopeIcon, PhoneIcon } from '../icons/heroicons'

const ContactSection = () => {
  const email = profile.contact.email?.trim() ? profile.contact.email : undefined
  const phone = profile.contact.phone?.trim() ? profile.contact.phone : undefined
  const socialOrder = ['LinkedIn', 'Currículum', 'GitHub']
  const orderedList = socialOrder
    .map((label) => profile.socials.find((social) => social.label === label))
    .filter((social): social is (typeof profile.socials)[number] => Boolean(social))
  const remainingSocials = profile.socials.filter(
    (social) => !socialOrder.includes(social.label),
  )
  const orderedSocials = [...orderedList, ...remainingSocials]

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
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-glow-surface backdrop-blur sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <motion.div
          className="space-y-6 text-sm text-slate-300"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-base font-semibold uppercase tracking-[0.18em] text-primary-200"
          >
            Disponible para prácticas preprofesionales
          </motion.h3>
          <motion.p variants={fadeInUp}>
            Busco activamente una oportunidad de{' '}
            <strong>prácticas preprofesionales en desarrollo de software o TI</strong>. Si tu equipo
            necesita a alguien comprometido, con bases sólidas y ganas de aportar desde el primer
            día, conversemos. Puedes escribirme directamente o dejarme un mensaje en el formulario.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2"
          >
            {email ? (
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-primary-400/70 hover:bg-primary-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 sm:px-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500/10 text-primary-200 transition group-hover:bg-primary-500/20 group-hover:text-primary-100">
                  <EnvelopeIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-primary-200">
                    Correo
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">{email}</span>
                </span>
              </a>
            ) : null}
            {phone ? (
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-primary-400/70 hover:bg-primary-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 sm:px-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500/10 text-primary-200 transition group-hover:bg-primary-500/20 group-hover:text-primary-100">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-primary-200">
                    Teléfono
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">{phone}</span>
                </span>
              </a>
            ) : null}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-1.5 sm:gap-3 lg:gap-4"
          >
            {orderedSocials.map((social) => {
              const isDownload = Boolean(social.download)
              const linkProps = isDownload
                ? { download: '', target: undefined, rel: undefined }
                : { target: '_blank', rel: 'noreferrer' as const }
              const Icon = isDownload ? ArrowDownTrayIcon : ArrowUpRightIcon
              const baseClasses =
                'group flex w-full flex-col items-center justify-center gap-2 rounded-2xl border px-2 py-3 text-center text-[0.68rem] font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 min-[420px]:px-3 min-[420px]:text-xs sm:px-4 sm:py-4 sm:text-sm'
              const variantClasses = isDownload
                ? 'border-primary-400/70 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 text-white shadow-glow-primary hover:shadow-lg hover:shadow-primary-500/30'
                : 'border-white/10 bg-white/5 text-slate-100 hover:border-primary-400/70 hover:bg-primary-400/10'

              return (
                <a
                  key={social.href}
                  href={social.href}
                  {...linkProps}
                  className={`${baseClasses} ${variantClasses}`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full min-[420px]:h-8 min-[420px]:w-8 sm:h-10 sm:w-10 ${
                      isDownload
                        ? 'bg-white/20 text-white transition group-hover:bg-white/30'
                        : 'bg-primary-500/10 text-primary-200 transition group-hover:bg-primary-500/20 group-hover:text-primary-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="block">{social.label}</span>
                </a>
              )
            })}
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
              className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300/40"
              style={{ minHeight: '112px' }}
              onInput={(event) => {
                const target = event.currentTarget
                target.style.height = 'auto'
                target.style.height = `${Math.max(target.scrollHeight, 112)}px`
              }}
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
