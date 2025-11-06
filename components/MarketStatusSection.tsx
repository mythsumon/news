'use client'

interface MarketStatusSectionProps {
  locale?: 'KR' | 'EN' | 'MM'
}

export default function MarketStatusSection({ locale = 'KR' }: MarketStatusSectionProps) {
  const title = {
    KR: '시장현황정보',
    EN: 'Market Status Info',
    MM: 'စျေးကွက် အခြေအနေ',
  }

  const subtitle = {
    KR: 'Exchange rates, fuel prices, and economic trends in Myanmar.',
    EN: 'Exchange rates, fuel prices, and economic trends in Myanmar.',
    MM: 'ငွေလဲလှယ်နှုန်း၊ လောင်စာဆီ စျေးနှုန်းများနှင့် မြန်မာနိုင်ငံရှိ စီးပွားရေး လမ်းညွှန်။',
  }

  const cards = {
    KR: [
      {
        id: 'exchange-rate',
        title: '환율 (KRW/MMK)',
        value: '29.5',
        subtext: '+1.2% (▲ 상승)',
        trend: 'up',
        ariaLabel: 'KRW to MMK rate, 29.5, up 1.2 percent',
      },
      {
        id: 'gold-price',
        title: '금 시세',
        value: '2,925,000 MMK',
        subtext: '전일 대비 ▼ 0.3%',
        trend: 'down',
        ariaLabel: 'Gold price, 2,925,000 MMK, down 0.3 percent from previous day',
      },
      {
        id: 'fuel-price',
        title: '휘발유 가격',
        value: '2,450 MMK/L',
        subtext: 'Updated today 10:30 AM',
        trend: 'neutral',
        ariaLabel: 'Fuel price, 2,450 MMK per liter',
      },
      {
        id: 'business-index',
        title: '비즈니스 지수',
        value: '74.3',
        subtext: 'Last week\'s trend ▲ steady growth',
        trend: 'up',
        ariaLabel: 'Business index, 74.3, showing steady growth',
      },
    ],
    EN: [
      {
        id: 'exchange-rate',
        title: 'Exchange Rate (KRW/MMK)',
        value: '29.5',
        subtext: '+1.2% (▲ Up)',
        trend: 'up',
        ariaLabel: 'KRW to MMK rate, 29.5, up 1.2 percent',
      },
      {
        id: 'gold-price',
        title: 'Gold Price',
        value: '2,925,000 MMK',
        subtext: '▼ 0.3% vs previous day',
        trend: 'down',
        ariaLabel: 'Gold price, 2,925,000 MMK, down 0.3 percent from previous day',
      },
      {
        id: 'fuel-price',
        title: 'Fuel Price',
        value: '2,450 MMK/L',
        subtext: 'Updated today 10:30 AM',
        trend: 'neutral',
        ariaLabel: 'Fuel price, 2,450 MMK per liter',
      },
      {
        id: 'business-index',
        title: 'Business Index',
        value: '74.3',
        subtext: 'Last week\'s trend ▲ steady growth',
        trend: 'up',
        ariaLabel: 'Business index, 74.3, showing steady growth',
      },
    ],
    MM: [
      {
        id: 'exchange-rate',
        title: 'ငွေလဲလှယ်နှုန်း (KRW/MMK)',
        value: '29.5',
        subtext: '+1.2% (▲ တက်ရောက်)',
        trend: 'up',
        ariaLabel: 'KRW to MMK rate, 29.5, up 1.2 percent',
      },
      {
        id: 'gold-price',
        title: 'ရွှေစျေးနှုန်း',
        value: '2,925,000 MMK',
        subtext: 'မနေ့ကနှင့် နှိုင်းယှဉ် ▼ 0.3%',
        trend: 'down',
        ariaLabel: 'Gold price, 2,925,000 MMK, down 0.3 percent from previous day',
      },
      {
        id: 'fuel-price',
        title: 'လောင်စာဆီ စျေးနှုန်း',
        value: '2,450 MMK/L',
        subtext: 'ယနေ့ 10:30 AM တွင် အပ်ဒိတ်လုပ်ထား',
        trend: 'neutral',
        ariaLabel: 'Fuel price, 2,450 MMK per liter',
      },
      {
        id: 'business-index',
        title: 'စီးပွားရေး အညွှန်းကိန်း',
        value: '74.3',
        subtext: 'ပြီးခဲ့သော အပတ် လမ်းညွှန် ▲ မှန်မှန်ကြီး တိုးတက်နေသည်',
        trend: 'up',
        ariaLabel: 'Business index, 74.3, showing steady growth',
      },
    ],
  }

  const currentCards = cards[locale]

  return (
    <section className="py-10 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-headline text-text-primary mb-2">
            {title[locale]}
          </h2>
          <p className="text-text-secondary mb-6">{subtitle[locale]}</p>
          <div className="border-t border-accent-border mt-2"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentCards.map((card) => (
            <div
              key={card.id}
              aria-label={card.ariaLabel}
              className="group bg-white rounded-card p-5 border border-accent-border hover:border-accent-hover shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Title */}
              <h3 className="text-sm font-medium text-accent-green mb-3">
                {card.title}
              </h3>

              {/* Value */}
              <div className="mb-2">
                <span className="text-2xl md:text-3xl font-headline tabular-nums text-text-primary group-hover:opacity-90 transition-opacity">
                  {card.value}
                </span>
              </div>

              {/* Subtext with Trend Indicator */}
              <div className="flex items-center gap-1.5">
                {card.trend === 'up' && (
                  <span className="text-accent-hover text-xs">▲</span>
                )}
                {card.trend === 'down' && (
                  <span className="text-red-600 text-xs">▼</span>
                )}
                {card.trend === 'neutral' && (
                  <span className="text-text-secondary text-xs">•</span>
                )}
                <span
                  className={`text-xs ${
                    card.trend === 'up'
                      ? 'text-accent-hover'
                      : card.trend === 'down'
                      ? 'text-red-600'
                      : 'text-text-secondary'
                  }`}
                >
                  {card.subtext}
                </span>
              </div>

              {/* Optional Mini Sparkline for Exchange Rate */}
              {card.id === 'exchange-rate' && (
                <div className="h-8 bg-background rounded mt-3 flex items-end justify-between gap-0.5 p-1">
                  {[25, 28, 26, 30, 27, 32, 29].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-accent-green rounded-t transition-all opacity-60"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}