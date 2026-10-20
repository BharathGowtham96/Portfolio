export default function ProjectCard({ title, stack, text }) {
  return (
    <article
      data-reveal
      className="rounded-lg border border-line bg-surface p-5 transition-[border-color,transform] duration-200 [overflow-wrap:anywhere] hover:-translate-y-0.5 hover:border-accent max-sm:p-4"
    >
      <h3 className="mb-1.5 font-heading text-[17px] font-semibold">{title}</h3>
      <div className="mb-2.5 font-mono text-[11.5px] text-accent">{stack}</div>
      <p className="text-sm text-muted">{text}</p>
    </article>
  )
}
