# Myanmar Life KR - News Homepage

Modern news homepage hero section with magazine-style design.

## Features

- **Desktop Layout**:
  - Top utility bar (location/time, social icons, login)
  - Header with logo, navigation, search, and language switcher
  - Promo banner with CTA
  - Trending ticker with auto-scroll
  - Hero grid (1 large + 3 small cards)

- **Mobile Layout**:
  - Sticky header with hamburger menu
  - Responsive promo banner
  - Single-line ticker marquee
  - Vertical card stack
  - Bottom tab bar navigation

## Components

- `UtilityBar` - Top utility information bar
- `Header` - Main navigation header
- `PromoBanner` - Admin-selectable promotional banner
- `TrendingTicker` - Auto-scrolling trending headlines
- `HeroCardLarge` - Large feature card (16:9)
- `HeroCardSmall` - Small news cards (16:9)
- `LangSwitch` - Language switcher (KR/EN/MM)
- `SearchButton` - Search overlay trigger

## Design System

- **Colors**: Light background (#F9FAFB), dark text (#0F172A), accent green (#16A34A)
- **Typography**: Pretendard/Noto Sans KR for Korean, Noto Sans for EN/MM
- **Spacing**: 8px grid system
- **Radius**: 16px for cards
- **Shadows**: Soft shadows with hover elevation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

## Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── UtilityBar.tsx      # Top utility bar
│   ├── Header.tsx          # Navigation header
│   ├── PromoBanner.tsx     # Promotional banner
│   ├── TrendingTicker.tsx  # Trending headlines
│   ├── HeroCardLarge.tsx   # Large hero card
│   ├── HeroCardSmall.tsx   # Small hero cards
│   ├── LangSwitch.tsx      # Language switcher
│   └── SearchButton.tsx    # Search overlay
└── ...
```

## Accessibility

- WCAG AA compliant focus outlines
- Proper ARIA labels
- Keyboard navigation support
- Semantic HTML structure
