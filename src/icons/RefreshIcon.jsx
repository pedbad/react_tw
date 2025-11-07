const RefreshIcon = ({ className = '', title = 'Refresh', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M17.65 6.35a7.95 7.95 0 0 0-11.3 0L4 7.69V4H2v6h6V8H4.38l1.7-1.7a5.95 5.95 0 0 1 8.44 0 5.95 5.95 0 0 1 0 8.44 5.95 5.95 0 0 1-8.44 0l-1.41 1.41a7.95 7.95 0 1 0 11.24-11.8Z" />
  </svg>
)

export default RefreshIcon
