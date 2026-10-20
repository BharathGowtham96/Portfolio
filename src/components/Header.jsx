import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { gsap, useGSAP, motionOK } from '../lib/gsap'
import { navLinks, profile } from '../data/portfolio'

export default function Header() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(motionOK, () => {
        gsap.from(root.current, { yPercent: -100, opacity: 0, duration: 0.6, ease: 'power3.out' })
      })
    },
    { scope: root },
  )

  return (
    <header
      ref={root}
      className="sticky top-0 z-10 border-b border-line bg-canvas/80 pt-[env(safe-area-inset-top,0px)] backdrop-blur-[10px] backdrop-saturate-[1.2] max-[480px]:landscape:static"
    >
      <div className="mx-auto flex max-w-[920px] items-center justify-between gap-3 px-6 py-3.5 max-sm:px-[18px] max-sm:py-2.5 max-[420px]:flex-col max-[420px]:items-stretch max-[420px]:gap-2 max-[420px]:px-3.5 max-[420px]:py-2 xl:max-w-[1040px] min-[1800px]:max-w-[1200px]">
        <Link to="/" className="whitespace-nowrap text-sm font-semibold tracking-[-.01em] sm:text-[15px]">
          {profile.shortName}
        </Link>
        <nav className="no-scrollbar flex max-w-full gap-0.5 overflow-x-auto rounded-full border border-line bg-surface p-1 text-[13px] sm:text-[13.5px] max-[420px]:justify-between">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  'whitespace-nowrap rounded-full px-3.5 py-[7px] transition-colors duration-200 max-sm:px-[11px] max-[420px]:flex-1 max-[420px]:px-1.5 max-[420px]:py-2 max-[420px]:text-center [@media(pointer:coarse)]:py-2.5',
                  isActive ? 'bg-accent-soft text-ink' : 'text-muted hover:bg-accent-soft hover:text-ink',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
