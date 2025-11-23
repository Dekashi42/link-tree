import React, { useEffect, useState } from 'react'

function SvgIcon({ name, className = '' }) {
  if (name === 'whatsapp') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2.04C6.48 2.04 2 6.52 2 12c0 1.99.52 3.85 1.42 5.48L2 22l4.65-1.36A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2.04 12 2.04z" fill="#25D366" />
        <path d="M8.21 7.9c-.2.07-.36.19-.5.36-.42.46-.02 1.15.55 1.9.57.76 1.37 1.58 1.87 1.7.05.01.08.01.13.01.34 0 .67-.25 1.03-.51.35-.25.69-.47 1.04-.32.22.09.46.35.65.64.2.28.32.6.28.85-.09.59-.39 1.09-.98 1.58-.76.66-1.7.86-2.62.98-.9.12-1.74-.01-2.53-.5-.79-.48-1.6-1.26-2.06-2.15-.67-1.34-.56-2.58.25-3.1.57-.36 1.39-.24 2.07.02.39.15.76.35 1.09.51.22.1.44.08.6-.03.23-.16.43-.4.62-.62.17-.19.36-.38.56-.53.25-.18.54-.33.88-.33.55 0 1.02.34 1.28.53.24.18.58.07.72-.3.22-.57.1-1.18-.38-1.57-.64-.52-1.52-.88-2.53-.88-.94 0-1.71.25-2.32.56z" fill="#fff" opacity="0.95" />
      </svg>
    )
  }
  if (name === 'telegram') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M22 2L2 12.5 6.5 15 9 21l3.5-9.5L22 2z" fill="#2AABEE" />
      </svg>
    )
  }
  // group/default
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="8" r="3" fill="#A78BFA" />
      <path d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4v1H4v-1z" fill="#94A3B8" />
    </svg>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (e) { return false }
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) {}
  }, [dark])

  // Only 4 links as requested: two WhatsApp entries, one Telegram, one Group
  const links = [
    { id: 'phone', label: '+1 912 831 2161', href: 'https://wa.me/19128312161', icon: 'whatsapp', variant: 'btn--primary' },
    { id: 'dan', label: 'Message Dan on WhatsApp', href: 'https://wa.me/254106870258', icon: 'whatsapp', variant: 'btn--pill' },
    { id: 'tg', label: 'Telegram: whalesfx68', href: 'https://t.me/whalesfx68', icon: 'telegram', variant: 'btn--outline-rounded' },
    { id: 'group', label: 'Join WhatsApp Group', href: 'https://chat.whatsapp.com/J9urbgDPGKGAW9RA0w2qQl', icon: 'group', variant: 'btn--ghost' }
  ]

  const tileVariants = ['tile--glass', 'tile--accent', 'tile--soft', 'tile--elevated', 'tile--border', 'tile--rounded']

  return (
    <div className={`hero-root theme-transition ${dark ? 'dark bg-gray-900 text-gray-100' : 'bg-gradient-shift text-gray-900'}`}>
      {/* decorative blobs */}
      <div className="blob blob--one" aria-hidden></div>
      <div className="blob blob--two" aria-hidden></div>
      <div className="blob blob--three" aria-hidden></div>

      <header className="w-full z-20 p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="avatar-wrap">
            <div className="avatar-ring" aria-hidden></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">K</div>
          </div>
          <div>
            <div className="caps text-sm">Kenaki</div>
            <div className="text-xs muted">One place for my important links</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button aria-pressed={dark} aria-label="Toggle theme" onClick={() => setDark(!dark)} className="btn focus-ring">
            {dark ? '🌙' : '☀️'}
          </button>
          <a href="#" className="btn btn--primary hidden sm:inline-flex">Follow</a>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-8 pb-20 z-10">
        <section className="grid lg:grid-cols-3 gap-8 items-start">
          {/* left: profile & stats */}
          <aside className="lg:col-span-1">
            <div className={`card card--lg glass ${dark ? 'glass-dark' : ''} hover-pop`}> 
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-36 h-36 rounded-full overflow-hidden bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">K</div>
                  <span className="online-dot" aria-hidden></span>
                </div>
                <h2 className="text-2xl font-bold neon">Emmilio</h2>
                <p className="muted-3 mt-2"> accessible links and resources</p>

                <div className="mt-6 w-full">
                  <div className="sep"></div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <div className="text-sm font-semibold">Links</div>
                      <div className="text-xs muted">Curated connections</div>
                    </div>
                    <div className="badge badge--indigo">6</div>
                  </div>
                  <div className="accent-line mt-4"></div>
                  <div className="mt-4 flex gap-2 wrap">
                    <button className="btn btn--outline-rounded">Share</button>
                    <button className="btn btn--ghost">Copy</button>
                    <button className="btn btn--success">Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* middle: main link grid (prominent) */}
          <section className="lg:col-span-2">
            <div className="card card--alt p-6">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <p className="text-sm muted mb-6">Tap any tile to open the service. Buttons have different visual treatments for variety.</p>

              <div className="links-grid">
                {links.map((l, i) => (
                  <a key={l.id} href={l.href} target="_blank" rel="noopener noreferrer" className={`tile ${tileVariants[i % tileVariants.length]} hover-glow`} aria-label={l.label}>
                    <div className="flex items-center gap-4">
                      <div className={`icon-circle ${i % 3 === 0 ? 'icon-circle--indigo' : i % 3 === 1 ? 'icon-circle--teal' : 'icon-circle--rose'}`}>
                        <SvgIcon name={l.icon} className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium truncate" style={{maxWidth: '18rem'}}>{l.label}</div>
                        <div className="text-xs muted-3 truncate" style={{maxWidth: '18rem'}}>{new URL(l.href, window.location.href).host || l.href.replace(/^https?:\/\//, '')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="badge badge--pink">Open</span>
                      <div className="caps">Go</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Removed extra style playground to keep only the four production links */}
            </div>
          </section>
        </section>
      </main>

      <footer className="w-full p-6 text-center muted-3">© {new Date().getFullYear()} Kenaki — Built with React & Tailwind</footer>
    </div>
  )
}
