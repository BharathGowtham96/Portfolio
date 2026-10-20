import { Link } from 'react-router-dom'

const base =
  'inline-block rounded-lg px-5 py-[11px] text-center text-sm font-semibold transition-[background-color,border-color,opacity] duration-200 active:brightness-90 [@media(pointer:coarse)]:py-[13px]'
const variants = {
  primary: 'bg-ink text-canvas hover:opacity-85',
  ghost: 'border border-line text-ink hover:border-accent hover:bg-surface',
}

/** Renders a router <Link> when `to` is given, otherwise a plain <a>. */
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  return <a href={href} className={cls} {...rest}>{children}</a>
}
