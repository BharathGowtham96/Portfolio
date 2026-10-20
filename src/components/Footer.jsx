import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-line pb-[calc(40px+env(safe-area-inset-bottom,0px))] pt-8">
      <div className="wrap">
        <p className="label">
          {profile.name} — {profile.title} · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
