import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, motionOK } from '../lib/gsap'

/** Fades/slides a page in on mount. Mount it with `key={pathname}` so it replays per route. */
export default function PageTransition({ children }) {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(motionOK, () => {
        gsap.fromTo(
          root.current,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
            onComplete: () => ScrollTrigger.refresh(),
          },
        )
      })
    },
    { scope: root },
  )

  return <div ref={root}>{children}</div>
}
