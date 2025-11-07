const DownloadIcon = ({ className = '', title = 'Download', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M5 20h14v-2H5Zm6-3h2V9h3l-4-5-4 5h3Z" />
  </svg>
)

export default DownloadIcon
