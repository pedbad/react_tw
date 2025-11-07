const CheckIcon = ({ className = '', title = 'Check mark', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19l12-12-1.41-1.41z" />
  </svg>
)

export default CheckIcon
