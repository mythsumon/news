'use client'

interface PromoBannerProps {
  image?: string
  title?: string
  subtitle?: string
  href?: string
  locale?: 'KR' | 'EN' | 'MM'
  isAd?: boolean
}

export default function PromoBanner({
  image = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=300&fit=crop',
  title,
  subtitle,
  href = '#',
  locale = 'KR',
  isAd = false,
}: PromoBannerProps) {
  const defaultTitle = {
    KR: '특별 이벤트',
    EN: 'Special Event',
    MM: 'အထူးပွဲ',
  }

  const defaultSubtitle = {
    KR: '최신 소식을 확인하세요',
    EN: 'Check out the latest updates',
    MM: 'နောက်ဆုံး သတင်းများကို စစ်ဆေးပါ',
  }

  const badgeLabel = {
    KR: '특별 이벤트',
    EN: 'Special Event',
    MM: 'အထူးပွဲ',
  }

  const currentTitle = title || defaultTitle[locale]
  const currentSubtitle = subtitle || defaultSubtitle[locale]

  return (
    <a
      href={href}
      aria-label="Special event banner"
      className="group block w-full h-[180px] md:h-[240px] lg:h-[320px] rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-accent-border hover:bg-accent-hover/10 hover:scale-[1.01] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
    >
      <div className="relative w-full h-full">
        {/* Background Image */}
        {image && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent z-10" />
            <img
              src={image}
              alt={currentTitle}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </>
        )}

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-start p-4 md:p-8 text-white">
          {/* Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-accent-green text-white text-sm font-medium rounded-full">
              {badgeLabel[locale]}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-headline mb-2 line-clamp-2 max-w-2xl">
            {currentTitle}
          </h2>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm md:text-base text-white/80 max-w-2xl">
              {currentSubtitle}
            </p>
          )}

          {/* Optional AD Badge */}
          {isAd && (
            <div className="absolute top-2 right-2 md:top-4 md:right-4">
              <span className="inline-block px-2 py-1 bg-accent-green text-white text-xs font-medium rounded-full">
                {locale === 'KR' ? '광고' : locale === 'EN' ? 'AD' : 'ကြော်ငြာ'}
              </span>
            </div>
          )}
        </div>
      </div>
    </a>
  )
}
