import { spec } from '../data/portfolio'

export default function SpecCard() {
  return (
    <div data-spec-card className="max-w-full overflow-hidden rounded-lg border border-line bg-surface">
      {spec.map(({ label, value }) => (
        <div
          key={label}
          data-spec-row
          className="flex justify-between gap-4 border-b border-line px-4 py-3 text-[13.5px] last:border-b-0 max-[420px]:flex-col max-[420px]:gap-0.5 max-[420px]:px-3.5 max-[420px]:py-2.5"
        >
          <span className="font-mono text-muted">{label}</span>
          <span className="max-w-[60%] text-right [overflow-wrap:anywhere] max-[860px]:max-w-[65%] max-[420px]:max-w-full max-[420px]:text-left">
            {value}
          </span>
        </div>
      ))}
    </div>
  )
}
