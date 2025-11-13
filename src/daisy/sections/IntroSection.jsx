function IntroSection() {
  return (
    <section className="space-y-6 rounded-3xl border border-base-300 bg-base-100/60 p-8 shadow-sm">
      <div className="space-y-3">
        <p className="caption uppercase tracking-wide text-text-tertiary">DaisyUI showcase</p>
        <h1 className="heading-md">Every component in one playground</h1>
        <p className="body-sm text-text-secondary">
          This page mirrors the Catalyst demo but swaps in every DaisyUI primitive so you can compare a full, themed set of
          Tailwind components without leaving the sandbox.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-base-200 bg-base-100">
        <div className="navbar bg-base-200/80 px-4 backdrop-blur">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <a className="btn btn-ghost btn-sm">Docs</a>
            <a className="btn btn-ghost btn-sm">Themes</a>
            <a className="btn btn-primary btn-sm">Get started</a>
          </div>
          <div className="md:hidden">
            <button type="button" className="btn btn-square btn-ghost" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hero min-h-[320px] bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              className="max-w-sm rounded-lg shadow-2xl"
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Learning workspace preview"
            />
            <div className="space-y-4 text-left">
              <p className="badge badge-secondary">Hero</p>
              <h2 className="text-4xl font-bold">Blend DaisyUI into an existing design system.</h2>
              <p className="text-base-content/80">
                Use Tailwind utility tokens from the core app or switch to any Daisy theme instantly. All patterns here are live components
                powered by the DaisyUI plugin that ships in this repo.
              </p>
              <div className="flex flex-wrap gap-3">
                <button type="button" className="btn btn-primary">
                  Explore components
                </button>
                <button type="button" className="btn btn-outline">
                  Compare tokens
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
