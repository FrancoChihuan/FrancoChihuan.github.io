import { motion } from 'framer-motion'
import type { Link } from '../../data/profile'

type SocialLinkProps = {
  link: Link
}

const SocialLink = ({ link }: SocialLinkProps) => {
  const targetProps = link.newTab
    ? { target: '_blank', rel: 'noreferrer' as const }
    : {}
  const downloadProp = link.download ? { download: '' } : {}

  return (
    <motion.a
      href={link.href}
      {...targetProps}
      {...downloadProp}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-primary-400/60 hover:bg-primary-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
    >
      <span>{link.label}</span>
      <span aria-hidden="true">{link.download ? '⬇' : '↗'}</span>
    </motion.a>
  )
}

export default SocialLink
