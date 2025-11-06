'use client'

interface FooterProps {
  locale?: 'KR' | 'EN' | 'MM'
}

export default function Footer({ locale = 'KR' }: FooterProps) {
  const tagline = {
    KR: 'The news & lifestyle hub for Koreans in Myanmar',
    EN: 'The news & lifestyle hub for Koreans in Myanmar',
    MM: 'မြန်မာနိုင်ငံရှိ ကိုရီးယားလူမျိုးများအတွက် သတင်းနှင့် လူနေမှုပုံစံ ဗဟိုဌာန',
  }

  const links = {
    About: {
      KR: 'About',
      EN: 'About',
      MM: 'အကြောင်း',
    },
    Contact: {
      KR: 'Contact',
      EN: 'Contact',
      MM: 'ဆက်သွယ်ရန်',
    },
    Advertise: {
      KR: 'Advertise',
      EN: 'Advertise',
      MM: 'ကြော်ငြာရန်',
    },
    Privacy: {
      KR: 'Privacy Policy',
      EN: 'Privacy Policy',
      MM: 'ကိုယ်ရေးလုံခြုံမှု မူဝါဒ',
    },
  }

  const currentLinks = {
    About: links.About[locale],
    Contact: links.Contact[locale],
    Advertise: links.Advertise[locale],
    Privacy: links.Privacy[locale],
  }

  return (
    <footer className="bg-background mt-20">
      {/* Footer Ad */}
      <section className="py-8 border-b border-accent-border">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-card p-6 md:p-8 text-center shadow-sm">
            <div className="h-[90px] md:h-[90px] flex items-center justify-center mb-2">
              <div className="text-text-secondary text-sm">
                Sponsored by XYZ Remittance
              </div>
            </div>
            <p className="text-xs text-text-secondary">728×90 Ad Space</p>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Column */}
            <div>
              <a href="/" className="text-2xl font-bold text-accent-green mb-2 block">
                Myanmar Life KR
              </a>
              <p className="text-sm text-text-secondary">{tagline[locale]}</p>
            </div>

            {/* Center Column */}
            <div>
              <h4 className="font-medium text-text-primary mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-sm text-text-secondary hover:text-accent-green transition-colors">
                    {currentLinks.About}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-text-secondary hover:text-accent-green transition-colors">
                    {currentLinks.Contact}
                  </a>
                </li>
                <li>
                  <a href="/advertise" className="text-sm text-text-secondary hover:text-accent-green transition-colors">
                    {currentLinks.Advertise}
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-sm text-text-secondary hover:text-accent-green transition-colors">
                    {currentLinks.Privacy}
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h4 className="font-medium text-text-primary mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="text-text-secondary hover:text-accent-green transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-green transition-colors" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-green transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-green transition-colors" aria-label="KakaoTalk">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.716-.25l-.533-4.035C2.203 15.633 1.5 13.528 1.5 11.185 1.5 6.664 6.201 3 12 3Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-accent-border text-center">
            <p className="text-sm text-text-secondary">
              © 2025 Myanmar Life KR | All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
