import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, motionOK } from '../lib/gsap'
import PageHeader from '../components/PageHeader'
import SkillRow from '../components/SkillRow'
import { skills } from '../data/portfolio'

export default function Skills() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(motionOK, () => {
        gsap.from('[data-page-header] > *', { opacity: 0, y: 16, duration: 0.55, stagger: 0.08, ease: 'power2.out' })

        gsap.set('[data-skill-row], [data-chip]', { transition: 'none' })

        // Each row slides in, then its chips ripple in one by one
        gsap.utils.toArray('[data-skill-row]').forEach((row) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: row, start: 'top 92%', once: true },
            defaults: { ease: 'power2.out' },
          })
          tl.from(row, { opacity: 0, y: 14, duration: 0.45, clearProps: 'opacity,transform' }).from(
            row.querySelectorAll('[data-chip]'),
            { opacity: 0, y: 8, duration: 0.35, stagger: 0.03, clearProps: 'opacity,transform,transition' },
            '-=0.2',
          )
        })
        ScrollTrigger.refresh()
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="wrap pb-16">
      <PageHeader eyebrow="Skills" title="What I build with">
        Frontend, backend, mobile, data and cloud — the tools I reach for across the stack.
      </PageHeader>
      <div className="max-w-full overflow-hidden rounded-lg border border-line">
        {skills.map((s) => (
          <SkillRow key={s.group} {...s} />
        ))}
      </div>
    </div>
  )
}
