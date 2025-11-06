'use client'

interface MidPageAdSectionProps {
  image?: string
  title?: string
  sponsor?: string
  ctaText?: string
  ctaLink?: string
  locale?: 'KR' | 'EN' | 'MM'
}

export default function MidPageAdSection({
  image = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=200&fit=crop',
  title,
  sponsor,
  ctaText,
  ctaLink = '#',
  locale = 'KR',
}: MidPageAdSectionProps) {
  const defaultTitle = {
    KR: 'KPay – 미얀마 최고의 모바일 결제 서비스',
    EN: 'KPay – Fastest mobile payment service in Myanmar',
    MM: 'KPay – မြန်မာနိုင်ငံတွင် အမြန်ဆုံး မိုဘိုင်းပေးချေမှု ဝန်ဆောင်မှု',
  }

  const defaultCta = {
    KR: 'Learn More',
    EN: 'Learn More',
    MM: 'ပိုမိုလေ့လာရန်',
  }

  const handleClick = () => {
    if (ctaLink) {
      window.location.href = ctaLink
    }
  }

  return (
    <section className="py-10">
      <div className="relative w-full h-[200px] md:h-[160px] rounded-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer bg-white">
        <span className="absolute top-2 left-2 z-30 bg-black/60 text-white text-xs px-2 py-1 rounded">
          AD
        </span>
        {image ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
            <img
              src={image}
              alt={title || defaultTitle[locale]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              onClick={handleClick}
              loading="lazy"
            />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-accent-green/20 to-accent-green/10 flex items-center justify-center">
            <div className="text-text-secondary">광고 이미지</div>
          </div>
        )}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-6 md:px-12 text-white">
          <div className="flex-1">
            {sponsor && (
              <span className="text-xs text-gray-300 mb-2 block">Sponsored</span>
            )}
            <h3 className="text-xl md:text-2xl font-headline mb-2">
              {title || defaultTitle[locale]}
            </h3>
          </div>
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-accent-green hover:bg-accent-hover text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
          >
            {ctaText || defaultCta[locale]}
          </button>
        </div>
      </div>
    </section>
  )
}
