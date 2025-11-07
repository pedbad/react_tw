const BookIcon = ({ className = '', title = 'Book', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12v-2H6V4h12v16h2V4a2 2 0 0 0-2-2z" />
  </svg>
)

export default BookIcon
