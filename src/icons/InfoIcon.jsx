const InfoIcon = ({ className = '', title = 'Info', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 3a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 12 5zm1.25 12.5h-2.5v-1.5h.75V11h-.75v-1.5h1.75a.75.75 0 0 1 .75.75v5.75h.75Z" />
  </svg>
)

export default InfoIcon
