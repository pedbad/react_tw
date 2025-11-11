function SearchIcon({ className = 'h-5 w-5', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="17" y1="17" x2="21" y2="21" />
    </svg>
  )
}

export default SearchIcon
