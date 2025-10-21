export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}
