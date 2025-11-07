const ErrorIcon = ({ className = '', title = 'Error', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm3.54 13.46-1.08 1.08L12 13.08l-2.46 3.46-1.08-1.08L10.92 12 8.46 9.54l1.08-1.08L12 10.92l2.46-2.46 1.08 1.08L13.08 12Z" />
  </svg>
)

export default ErrorIcon
