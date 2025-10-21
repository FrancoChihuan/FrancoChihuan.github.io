type InfoChipProps = {
  label: string
}

const InfoChip = ({ label }: InfoChipProps) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-200">
    {label}
  </span>
)

export default InfoChip
