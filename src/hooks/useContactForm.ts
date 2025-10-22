import { useState, useCallback } from 'react'
import type { FormEvent } from 'react'

type ContactStatus = 'idle' | 'loading' | 'success' | 'error'

type UseContactFormParams = {
  endpoint: string
  ccEmail?: string
}

const useContactForm = ({ endpoint, ccEmail }: UseContactFormParams) => {
  const [status, setStatus] = useState<ContactStatus>('idle')

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = event.currentTarget
      const formData = new FormData(form)
      formData.append('_captcha', 'false')
      formData.append('_subject', 'Nuevo mensaje desde el portafolio')
      if (ccEmail) {
        formData.append('_cc', ccEmail)
      }

      try {
        setStatus('loading')
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        })
        if (!response.ok) {
          throw new Error('Request failed')
        }
        setStatus('success')
        form.reset()
      } catch (error) {
        console.error('Form submission error', error)
        setStatus('error')
      }
    },
    [endpoint, ccEmail],
  )

  return { status, handleSubmit, setStatus }
}

export type { ContactStatus }
export default useContactForm
