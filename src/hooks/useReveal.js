import { gsap, ScrollTrigger, useGSAP, motionOK } from '../lib/gsap'

/**
 * Fades + lifts every `[data-reveal]` element inside `scope` as it scrolls into view.
 * Elements revealed together (same batch) are staggered. Respects prefers-reduced-motion.
 */
export default function useReveal(scope) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(motionOK, () => {
        const els = scope.current.querySelectorAll('[data-reveal]')
        if (!els.length) return
        // CSS transitions (e.g. hover lift) fight GSAP: disable while animating, restore via clearProps
        gsap.set(els, { opacity: 0, y: 18, transition: 'none' })
        ScrollTrigger.batch(els, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              overwrite: true,
              clearProps: 'opacity,transform,transition',
            }),
        })
      })
    },
    { scope },
  )
}
