import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { gsap, useGSAP, motionOK } from '../lib/gsap'
import { navLinks, profile } from '../data/portfolio'

export default function Header({ theme, onThemeToggle }) {
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
      className="sticky top-0 z-10 border-b border-line/80 bg-canvas/75 pt-[env(safe-area-inset-top,0px)] shadow-[0_12px_40px_rgb(var(--color-canvas)/0.12)] backdrop-blur-xl backdrop-saturate-150 max-[480px]:landscape:static"
    >
      <div className="mx-auto flex max-w-[920px] items-center justify-between gap-3 px-6 py-3.5 max-sm:px-[18px] max-sm:py-2.5 max-[420px]:flex-col max-[420px]:items-stretch max-[420px]:gap-2 max-[420px]:px-3.5 max-[420px]:py-2 xl:max-w-[1040px] min-[1800px]:max-w-[1200px]">
        <Link
          to="/"
          className="group flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold tracking-[-.01em] sm:text-[15px]"
        >
          <span className="relative flex size-8 items-center justify-center overflow-hidden rounded-full border border-accent/40 bg-accent-soft text-[11px] font-bold text-accent shadow-[0_0_18px_rgb(var(--color-accent)/0.14)]">
            BG
            <span className="absolute inset-x-1.5 bottom-0 h-px bg-accent/70 transition-[width] duration-300 group-hover:left-0 group-hover:right-0" />
          </span>
          <span>{profile.shortName}</span>
        </Link>
        <div className="flex min-w-0 items-center gap-2 max-[420px]:justify-between">
          <nav className="no-scrollbar flex min-w-0 max-w-full gap-1 overflow-x-auto rounded-[14px] border border-line/90 bg-surface/75 p-1 text-[13px] shadow-[inset_0_1px_0_rgb(255_255_255/0.04),0_8px_24px_rgb(var(--color-canvas)/0.12)] backdrop-blur-md sm:text-[13.5px] max-[420px]:flex-1 max-[420px]:justify-between">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    'group relative whitespace-nowrap rounded-[10px] px-3.5 py-[7px] transition-[color,background-color,box-shadow,transform] duration-200 max-sm:px-[11px] max-[420px]:flex-1 max-[420px]:px-1.5 max-[420px]:py-2 max-[420px]:text-center [@media(pointer:coarse)]:py-2.5',
                    isActive
                      ? 'bg-accent-soft text-ink shadow-[inset_0_0_0_1px_rgb(var(--color-accent)/0.16),0_4px_14px_rgb(var(--color-accent)/0.08)]'
                      : 'text-muted hover:-translate-y-px hover:bg-accent-soft/60 hover:text-ink',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{label}</span>
                    <span
                      className={[
                        'absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-accent transition-[width,opacity] duration-200',
                        isActive ? 'w-3 opacity-100' : 'w-0 opacity-0',
                      ].join(' ')}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent hover:bg-accent-soft [@media(pointer:coarse)]:size-11"
          >
            {theme === 'dark' ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-[18px]">
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
