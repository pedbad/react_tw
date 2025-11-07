const WarningIcon = ({ className = '', title = 'Warning', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="m1 21 11-19 11 19Zm11-3a1.25 1.25 0 1 0-1.25-1.25A1.25 1.25 0 0 0 12 18Zm-1-3.5h2V9h-2Z" />
  </svg>
)

export default WarningIcon
