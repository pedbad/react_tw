import ArrowUpIcon from './ArrowUpIcon.jsx'
import BookIcon from './BookIcon.jsx'
import CheckIcon from './CheckIcon.jsx'
import PlayIcon from './PlayIcon.jsx'
import InfoIcon from './InfoIcon.jsx'
import WarningIcon from './WarningIcon.jsx'
import ErrorIcon from './ErrorIcon.jsx'
import RefreshIcon from './RefreshIcon.jsx'
import EyeIcon from './EyeIcon.jsx'
import DownloadIcon from './DownloadIcon.jsx'
import SearchIcon from './SearchIcon.jsx'

const registry = {
  arrowUp: ArrowUpIcon,
  book: BookIcon,
  check: CheckIcon,
  play: PlayIcon,
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  refresh: RefreshIcon,
  eye: EyeIcon,
  download: DownloadIcon,
  search: SearchIcon,
}

export function Icon({ name, className = 'h-5 w-5', title, ...props }) {
  const Component = registry[name]
  if (!Component) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <Component className={className} title={title ?? name} aria-hidden={!title} {...props} />
}

export default Icon
export { registry as iconRegistry }
