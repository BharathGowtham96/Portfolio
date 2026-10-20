import { useRef } from 'react'
import { gsap, useGSAP, motionOK } from '../lib/gsap'
import useReveal from '../hooks/useReveal'
import PageHeader from '../components/PageHeader'
import TimelineRole from '../components/TimelineRole'
import { education, experience } from '../data/portfolio'

export default function Experience() {
  const root = useRef(null)

  useReveal(root)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(motionOK, () => {
        gsap.from('[data-page-header] > *', { opacity: 0, y: 16, duration: 0.55, stagger: 0.08, ease: 'power2.out' })

        // Timeline spine draws itself as you scroll
        gsap.fromTo(
          '[data-spine]',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top',
            scrollTrigger: { trigger: '[data-timeline]', start: 'top 75%', end: 'bottom 75%', scrub: 0.4 },
          },
        )

        // Dots pop when their role enters
        gsap.utils.toArray('[data-dot]').forEach((dot) => {
          gsap.from(dot, {
            scale: 0,
            duration: 0.4,
            ease: 'back.out(3)',
            scrollTrigger: { trigger: dot, start: 'top 88%', once: true },
          })
        })
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="wrap pb-16">
      <PageHeader eyebrow="Work" title="Experience">
        Five years across product companies — from Angular portals to Flutter and React platforms.
      </PageHeader>

      <section>
        <div data-timeline className="relative pl-[26px] max-sm:pl-[22px]">
          <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-line" aria-hidden="true" />
          <div data-spine className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-accent" aria-hidden="true" />
          {experience.map((role) => (
            <TimelineRole key={`${role.org}-${role.period}`} role={role} />
          ))}
        </div>
      </section>

      <section className="mt-11 border-t border-line pt-11 max-sm:mt-9 max-sm:pt-9">
        <h2 className="section-title">Education</h2>
        {education.map(({ degree, years }) => (
          <div
            key={degree}
            data-reveal
            className="flex flex-wrap justify-between gap-5 rounded-lg border border-line bg-surface px-[18px] py-4 max-sm:flex-col max-sm:gap-1.5"
          >
            <span className="font-semibold">{degree}</span>
            <span className="font-mono text-[13px] text-muted">{years}</span>
          </div>
        ))}
      </section>
    </div>
  )
}
