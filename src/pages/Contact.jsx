import { useRef } from 'react'
import { gsap, useGSAP, motionOK } from '../lib/gsap'
import PageHeader from '../components/PageHeader'
import { contact } from '../data/portfolio'

const linkCls =
  'w-fit border-b border-line transition-[border-color,color] duration-200 [overflow-wrap:anywhere] hover:border-accent hover:text-accent [@media(pointer:coarse)]:py-1.5'

export default function Contact() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(motionOK, () => {
        gsap
          .timeline({ defaults: { ease: 'power2.out' } })
          .from('[data-page-header] > *', { opacity: 0, y: 16, duration: 0.55, stagger: 0.08 })
          .from('[data-contact] > *', { opacity: 0, x: -16, duration: 0.5, stagger: 0.09 }, '-=0.3')
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="wrap pb-20">
      <PageHeader eyebrow="Contact" title="Get in touch">
        Open to conversations about full-stack, web and mobile work.
      </PageHeader>
      <div data-contact className="flex flex-col gap-2.5 text-[15px] max-sm:text-[14.5px]">
        <a className={linkCls} href={`mailto:${contact.email}`}>{contact.email}</a>
        <a className={linkCls} href={contact.phoneHref}>{contact.phone}</a>
        <a className={linkCls} href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          {contact.linkedinLabel}
        </a>
        <span>{contact.location}</span>
      </div>
    </div>
  )
}
