export default function TimelineRole({ role }) {
  const { period, title, org, summary, projects, points } = role
  return (
    <div data-role data-reveal className="relative mb-[38px] last:mb-0 [overflow-wrap:anywhere]">
      <span
        data-dot
        className="absolute -left-[26px] top-[5px] size-[9px] rounded-full border-2 border-canvas bg-accent shadow-[0_0_0_1px_#38BDF8] max-sm:-left-[22px]"
      />
      <div className="mb-1 font-mono text-[12.5px] text-muted">{period}</div>
      <h3 className="mb-0.5 font-heading text-[19px] font-semibold max-sm:text-[17.5px]">{title}</h3>
      <div className="mb-2.5 text-sm text-muted">{org}</div>

      {summary && <p className="mb-1 text-[14.5px] text-muted">{summary}</p>}

      {points && (
        <ul className="list-disc pl-[18px]">
          {points.map((p) => (
            <li key={p} className="mb-1.5 text-[14.5px] max-sm:text-sm">{p}</li>
          ))}
        </ul>
      )}

      {projects?.map((proj) => (
        <div key={proj.title} className="mt-4 border-t border-dashed border-line pt-3.5">
          <div className="mb-1.5 text-[14.5px] font-semibold">{proj.title}</div>
          <ul className="list-disc pl-[18px]">
            {proj.points.map((p) => (
              <li key={p} className="mb-1.5 text-[14.5px] max-sm:text-sm">{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
