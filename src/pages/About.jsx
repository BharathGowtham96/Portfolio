import { useRef } from 'react'
import { gsap, useGSAP, motionOK } from '../lib/gsap'
import useReveal from '../hooks/useReveal'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import { profile, education } from '../data/portfolio'

const resumeUrl = `${import.meta.env.BASE_URL}Bharath-Gowtham-Resume.pdf`

export default function About() {
  const root = useRef(null)

  useReveal(root)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(motionOK, () => {
        gsap.from('[data-page-header] > *', {
          opacity: 0,
          y: 16,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power2.out',
        })
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="wrap pb-16">
      <PageHeader eyebrow="About" title="Building across the stack">
        {profile.title} based in {profile.location}.
      </PageHeader>

      <div className="grid grid-cols-[1.4fr_1fr] gap-8 max-[860px]:grid-cols-1 max-[860px]:gap-5">
        <section data-reveal className="rounded-lg border border-line bg-surface p-6 max-sm:p-5">
          <h2 className="section-title">Profile</h2>
          <p className="text-[15.5px] leading-7 text-muted">{profile.about}</p>
          <p className="mt-4 text-[15.5px] leading-7 text-muted">{profile.intro}</p>
        </section>

        <aside data-reveal className="rounded-lg border border-line bg-surface p-5 max-sm:p-4">
          <p className="mb-3 font-mono text-xs text-accent">What I focus on</p>
          <ul className="space-y-2.5">
            {profile.focus.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-2.5">
            <Button
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              View resume
            </Button>
            <Button
              href={resumeUrl}
              download="Bharath-Gowtham-Resume.pdf"
              variant="ghost"
              className="w-full"
            >
              Download resume
            </Button>
          </div>
        </aside>
      </div>

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
