const PlayIcon = ({ className = '', title = 'Play', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M8 5v14l11-7z" />
  </svg>
)

export default PlayIcon
