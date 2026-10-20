export default function SkillRow({ group, items }) {
  return (
    <div
      data-skill-row
      className="grid grid-cols-[140px_1fr] gap-4 border-b border-line bg-surface px-[18px] py-3.5 last:border-b-0 max-sm:grid-cols-1 max-sm:gap-1.5 max-sm:px-3.5"
    >
      <div className="pt-0.5 font-mono text-[12.5px] text-muted">{group}</div>
      <div className="min-w-0 text-[14.5px]">
        {items.map((item) => (
          <span
            key={item}
            data-chip
            className="mb-1.5 mr-2 inline-block cursor-default text-[13px] transition-[color,transform] duration-150 after:ml-2 after:text-line after:content-['·'] last:after:content-[''] hover:-translate-y-px hover:text-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
