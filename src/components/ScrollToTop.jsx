import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Jumps to the top on every route change. Render it BEFORE <Outlet/> so it runs before page animations set up. */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
