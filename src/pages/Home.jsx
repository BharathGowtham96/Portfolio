import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap, useGSAP, motionOK } from '../lib/gsap'
import useReveal from '../hooks/useReveal'
import Button from '../components/Button'
import SpecCard from '../components/SpecCard'
import { exploreLinks, profile } from '../data/portfolio'

export default function Home() {
  const root = useRef(null)
  const words = profile.name.split(' ')

  // Hero intro timeline + floating glow
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(motionOK, () => {
        // CSS transitions fight GSAP, so switch them off while the intro runs (restored via clearProps)
        gsap.set('[data-hero="cta"] > *, [data-spec-row]', { transition: 'none' })
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 })
        tl.from('[data-hero="eyebrow"]', { opacity: 0, y: 16, duration: 0.5 })
          .from('[data-word]', { yPercent: 115, duration: 0.8, stagger: 0.08 }, '-=0.2')
          .from('[data-hero="desc"]', { opacity: 0, y: 20, duration: 0.6 }, '-=0.45')
          .from('[data-hero="cta"] > *', { opacity: 0, y: 16, duration: 0.5, stagger: 0.08, clearProps: 'opacity,transform,transition' }, '-=0.4')
          .from('[data-spec-card]', { opacity: 0, x: 24, duration: 0.7 }, 0.35)
          .from('[data-spec-row]', { opacity: 0, y: 8, duration: 0.4, stagger: 0.07, clearProps: 'opacity,transform,transition' }, 0.7)

        gsap.to('[data-orb]', {
          x: 24,
          y: -18,
          duration: 6,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      })
    },
    { scope: root },
  )

  useReveal(root)

  return (
    <div ref={root} className="relative overflow-hidden">
      <div
        data-orb
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[8%] size-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="wrap relative">
        <section className="grid grid-cols-[1.5fr_1fr] items-start gap-10 pb-10 pt-16 max-[860px]:grid-cols-1 max-[860px]:gap-8 max-[860px]:pb-8 max-[860px]:pt-12 max-sm:pb-7 max-sm:pt-9 xl:pb-14 xl:pt-[88px] [&>*]:min-w-0">
          <div>
            <p data-hero="eyebrow" className="mb-[18px] font-mono text-sm text-accent">
              {profile.title} · {profile.location}
            </p>
            <h1 className="mb-4 font-heading text-[clamp(34px,5vw,52px)] font-semibold leading-[1.08]" aria-label={profile.name}>
              {words.map((w, i) => (
                <span key={i} aria-hidden="true" className="-mb-[0.08em] mr-[0.25em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <span data-word className="inline-block">{w}</span>
                </span>
              ))}
            </h1>
            <p data-hero="desc" className="mb-[26px] max-w-[52ch] text-base text-muted max-[860px]:max-w-none max-sm:text-[15.5px] sm:text-[16.5px]">
              {profile.intro}
            </p>
            <div data-hero="cta" className="flex flex-wrap gap-3.5 max-sm:gap-2.5 [&>*]:max-sm:flex-[1_1_140px] [&>*]:max-[420px]:flex-[1_1_100%]">
              <Button to="/experience">See the work</Button>
              <Button to="/contact" variant="ghost">Get in touch</Button>
            </div>
          </div>
          <SpecCard />
        </section>

        <section className="border-t border-line py-11 max-sm:py-9">
          <h2 className="section-title">Explore</h2>
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {exploreLinks.map(({ to, index, title, text }) => (
              <Link
                key={to}
                to={to}
                data-reveal
                className="group rounded-lg border border-line bg-surface p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent max-sm:p-4"
              >
                <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
                  <span>{index}</span>
                  <span aria-hidden="true" className="text-accent transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
                <h3 className="mb-1 font-heading text-[17px] font-semibold">{title}</h3>
                <p className="text-sm text-muted">{text}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
