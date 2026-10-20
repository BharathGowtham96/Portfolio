export default function PageHeader({ eyebrow, title, children }) {
  return (
    <div className="pb-8 pt-12 max-sm:pt-9 xl:pt-16" data-page-header>
      <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
      <h1 className="font-heading text-[clamp(30px,5vw,44px)] font-semibold leading-[1.1]">{title}</h1>
      {children && <p className="mt-4 max-w-[52ch] text-muted">{children}</p>}
    </div>
  )
}
