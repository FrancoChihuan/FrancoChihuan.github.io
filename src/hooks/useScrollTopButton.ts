import { useEffect, useState } from 'react'

const useScrollTopButton = (threshold = 320) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return visible
}

export default useScrollTopButton
