'use client'

import LangSwitch from './LangSwitch'
import SearchButton from './SearchButton'

interface HeaderProps {
  currentLang: 'KR' | 'EN' | 'MM'
  onLangChange: (lang: 'KR' | 'EN' | 'MM') => void
}

export default function Header({ currentLang, onLangChange }: HeaderProps) {
  const navItems = [
    { label: { KR: '미얀마 뉴스', EN: 'Myanmar News', MM: 'မြန်မာ သတင်းများ' }, href: '/news' },
    { label: { KR: '시장현황정보', EN: 'Market Status', MM: 'စျေးကွက် အခြေအနေ' }, href: '/market' },
    { label: { KR: '한인업체 / 주소록', EN: 'Korean Directory', MM: 'ကိုရီးယား လမ်းညွှန်' }, href: '/directory' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-accent-border shadow-sm">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-4 lg:px-8 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-accent-green">
              Myanmar Life KR
            </a>
          </div>

          {/* Center Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-primary hover:text-accent-green transition-colors font-body-medium"
              >
                {item.label[currentLang]}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <SearchButton />
            <LangSwitch currentLang={currentLang} onLangChange={onLangChange} />
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <a href="/" className="text-xl font-bold text-accent-green">
            Myanmar Life KR
          </a>
          <div className="flex items-center gap-3">
            <SearchButton />
            <LangSwitch currentLang={currentLang} onLangChange={onLangChange} />
          </div>
        </div>
      </header>
    </>
  )
}
