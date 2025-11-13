import { useRef } from 'react'
import { Section, ExampleCard } from '../components/Section.jsx'

function FooterDemo() {
  return (
    <footer className="footer bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms</a>
        <a className="link link-hover">Privacy</a>
        <a className="link link-hover">Cookies</a>
      </nav>
    </footer>
  )
}

function CardCarouselDemo() {
  const slides = [
    'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
    'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
    'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
    'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
  ]

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Course preview" />
        </figure>
        <div className="card-body">
          <h3 className="card-title">Course card</h3>
          <p>Cards mix figure, body, title, and actions slots.</p>
          <div className="card-actions justify-end">
            <button type="button" className="btn btn-primary btn-sm">
              Enroll
            </button>
          </div>
        </div>
      </div>
      <div className="carousel rounded-box bg-base-200">
        {slides.map((url, index) => (
          <div key={url} className="carousel-item w-1/2 justify-center p-2">
            <img className="rounded-box" src={url} alt={`Gallery slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

function DrawerModalDemo() {
  const modalRef = useRef(null)

  const openModal = () => {
    modalRef.current?.showModal()
  }

  const closeModal = () => {
    modalRef.current?.close()
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="drawer rounded-box border border-base-300">
        <input id="demo-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center p-4">
          <label htmlFor="demo-drawer" className="btn drawer-button btn-outline btn-sm">
            Toggle drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="demo-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu min-h-full w-56 bg-base-200 p-4">
            <li className="menu-title">Drawer</li>
            <li>
              <a>Filters</a>
            </li>
            <li>
              <a>Timeline</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-3">
        <button type="button" className="btn btn-primary btn-sm" onClick={openModal}>
          Show modal
        </button>
        <dialog ref={modalRef} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Modal</h3>
            <p className="py-4">
              DaisyUI modals use native <code>&lt;dialog&gt;</code> elements but keep theming consistent.
            </p>
            <div className="modal-action">
              <button type="button" className="btn btn-sm btn-primary" onClick={closeModal}>
                Agree
              </button>
              <button type="button" className="btn btn-sm" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <p className="text-xs text-base-content/70">Use the button to open the modal and the backdrop to dismiss.</p>
      </div>
    </div>
  )
}

function DockFabDemo() {
  return (
    <div className="space-y-5">
      <div className="dock bg-base-200 p-4">
        {['Home', 'Inbox', 'Settings'].map((label) => (
          <button key={label} className={`btn btn-ghost ${label === 'Inbox' ? 'dock-active' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16v10H4z" />
            </svg>
            <span className="dock-label">{label}</span>
          </button>
        ))}
      </div>
      <div className="fab">
        <button type="button" className="btn btn-lg btn-circle btn-primary">
          +
        </button>
        <button type="button" className="btn btn-circle btn-lg">
          S
        </button>
        <button type="button" className="btn btn-circle btn-lg">
          L
        </button>
        <button type="button" className="btn btn-circle btn-lg">
          Q
        </button>
      </div>
    </div>
  )
}

function MockupDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-3">
        <div className="mockup-browser border border-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="border-t border-base-300 p-6">Mockup browser</div>
        </div>
        <div className="mockup-window border border-base-300">
          <div className="border-t border-base-300 p-6">Window mockup</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="mockup-phone">
          <div className="mockup-phone-camera"></div>
          <div className="mockup-phone-display bg-neutral p-6 text-neutral-content">
            <p>Phone mockup</p>
          </div>
        </div>
        <div className="mockup-code w-full">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

function LayoutSection() {
  const demos = [
    {
      title: 'Footer navigation',
      description: 'footer',
      Component: FooterDemo,
    },
    {
      title: 'Cards & carousels',
      description: 'card, carousel',
      Component: CardCarouselDemo,
      span: 2,
    },
    {
      title: 'Drawer + modal overlays',
      description: 'drawer, modal',
      Component: DrawerModalDemo,
    },
    {
      title: 'Dock & floating action',
      description: 'dock, fab',
      Component: DockFabDemo,
    },
    {
      title: 'Mockup shells',
      description: 'mockup-browser, mockup-window, mockup-phone, mockup-code',
      Component: MockupDemo,
      span: 2,
    },
  ]

  return (
    <Section
      eyebrow="Layouts"
      title="Surface & marketing primitives"
      description="High-level layouts such as footers, marketing carousels, drawers, docks, and framed mockups."
      columns="lg:grid-cols-2"
    >
      {demos.map((demo) => (
        <ExampleCard key={demo.title} title={demo.title} description={demo.description} span={demo.span}>
          <demo.Component />
        </ExampleCard>
      ))}
    </Section>
  )
}

export default LayoutSection
