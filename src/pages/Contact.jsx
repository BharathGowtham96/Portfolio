import { useRef } from 'react'
import { FaEnvelope, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { gsap, useGSAP, motionOK } from '../lib/gsap'
import PageHeader from '../components/PageHeader'
import { contact } from '../data/portfolio'

const linkCls =
  'flex w-fit items-center gap-2.5 border-b border-line transition-[border-color,color] duration-200 [overflow-wrap:anywhere] hover:border-accent hover:text-accent [@media(pointer:coarse)]:py-1.5'

const iconCls = 'shrink-0 text-accent'

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
        <a className={linkCls} href={`mailto:${contact.email}`}>
          <FaEnvelope className={iconCls} aria-hidden="true" />
          <span>{contact.email}</span>
        </a>
        <a className={linkCls} href={contact.phoneHref}>
          <FaPhoneAlt className={iconCls} aria-hidden="true" />
          <span>{contact.phone}</span>
        </a>
        <a className={linkCls} href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className={iconCls} aria-hidden="true" />
          <span>{contact.linkedinLabel}</span>
        </a>
        <span className="flex items-center gap-2.5">
          <FaMapMarkerAlt className={iconCls} aria-hidden="true" />
          <span>{contact.location}</span>
        </span>
      </div>
    </div>
  )
}
