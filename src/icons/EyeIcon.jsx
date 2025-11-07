const EyeIcon = ({ className = '', title = 'Eye', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M12 5c-5 0-9.27 3.11-11 7 1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
  </svg>
)

export default EyeIcon
