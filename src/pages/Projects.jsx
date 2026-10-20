import { useRef } from 'react'
import { gsap, useGSAP, motionOK } from '../lib/gsap'
import useReveal from '../hooks/useReveal'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  const root = useRef(null)

  useReveal(root)
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(motionOK, () => {
        gsap.from('[data-page-header] > *', { opacity: 0, y: 16, duration: 0.55, stagger: 0.08, ease: 'power2.out' })
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="wrap pb-16">
      <PageHeader eyebrow="Projects" title="Earlier projects">
        Where it started — a full-stack storefront and an embedded-systems monitor.
      </PageHeader>
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 max-sm:gap-4 [&>*]:min-w-0">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  )
}
