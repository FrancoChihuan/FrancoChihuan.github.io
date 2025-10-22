import type { SVGProps } from 'react'

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const SparklesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
    <path d="M9 3l1.3 3.5L14 8l-3.7 1.5L9 13l-1.3-3.5L4 8l3.7-1.5z" />
    <path d="M17 4.5l0.6 1.4L19 6.5l-1.4 0.6L17 8.5l-0.6-1.4L15 6.5l1.4-0.6z" />
    <path d="M6.5 16l0.8 1.8L9 18.5l-1.7 0.7L6.5 21l-0.8-1.8L4 18.5l1.7-0.7z" />
  </svg>
)

const GlobeAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
    <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 3 2.5 15 0 18" />
    <path d="M12 3c-2.5 3-2.5 15 0 18" />
  </svg>
)

const ChatBubbleLeftRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
    <path d="M7.5 12h-.75a3.75 3.75 0 0 1-3.75-3.75v-1.5A3.75 3.75 0 0 1 6.75 3h6.5A3.75 3.75 0 0 1 17 6.75v1.5" />
    <path d="M16.5 12h.75a3.75 3.75 0 0 1 3.75 3.75v1.5A3.75 3.75 0 0 1 17.25 21h-6.5A3.75 3.75 0 0 1 7 17.25v-1.5" />
    <path d="M8.5 12h7" />
  </svg>
)

export { SparklesIcon, GlobeAltIcon, ChatBubbleLeftRightIcon }
