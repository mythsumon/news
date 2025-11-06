'use client'

interface QuickStatsBoardProps {
  locale?: 'KR' | 'EN' | 'MM'
}

export default function QuickStatsBoard({ locale = 'KR' }: QuickStatsBoardProps) {
  const labels = {
    KR: {
      exchangeRate: 'KRW↔MMK',
      weather: '양곤 날씨',
      visitors: '오늘 방문자',
      vsYesterday: '어제 대비',
    },
    EN: {
      exchangeRate: 'KRW↔MMK',
      weather: 'Yangon Weather',
      visitors: "Today's Visitors",
      vsYesterday: 'vs yesterday',
    },
    MM: {
      exchangeRate: 'KRW↔MMK',
      weather: 'ရန်ကုန် ရာသီဥတု',
      visitors: 'ယနေ့ ဧည့်သည်များ',
      vsYesterday: 'မနေ့ကနှင့် နှိုင်းယှဉ်',
    },
  }

  const currentLabels = labels[locale]

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Exchange Rate Card */}
      <div className="bg-white rounded-card p-4 border border-accent-border hover:border-accent-hover hover:shadow-md transition-all duration-200">
        <h3 className="text-sm font-medium text-accent-green mb-3">{currentLabels.exchangeRate}</h3>
        <div className="flex items-baseline gap-2 mb-2">
          <span 
            className="text-3xl font-headline tabular-nums text-text-primary"
            aria-label={`${currentLabels.exchangeRate} exchange rate value`}
          >
            29.5
          </span>
          <span className="text-xs font-medium text-accent-green flex items-center gap-0.5">
            ▲ +1.2%
          </span>
        </div>
        {/* Mini Sparkline */}
        <div className="h-8 bg-background rounded mt-3 flex items-end justify-between gap-0.5 p-1">
          {[25, 28, 26, 30, 27, 32, 29].map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-accent-green rounded-t transition-all"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      {/* Weather Card */}
      <div className="bg-white rounded-card p-4 border border-accent-border hover:border-accent-hover hover:shadow-md transition-all duration-200">
        <h3 className="text-sm font-medium text-accent-green mb-3">{currentLabels.weather}</h3>
        <div className="flex items-center gap-3">
          <div className="text-3xl">☀️</div>
          <div className="flex-1">
            <div 
              className="text-3xl font-headline tabular-nums text-text-primary mb-1"
              aria-label="Current temperature"
            >
              29°C
            </div>
            <div className="text-xs text-text-secondary">
              {locale === 'KR' ? '맑음 · 습도 68% · 10:15' : locale === 'EN' ? 'Sunny · Hum 68% · 10:15' : 'မှန်သော · စိုထိုင်းဆ 68% · 10:15'}
            </div>
          </div>
        </div>
      </div>

      {/* Visitors Card */}
      <div className="bg-white rounded-card p-4 border border-accent-border hover:border-accent-hover hover:shadow-md transition-all duration-200">
        <h3 className="text-sm font-medium text-accent-green mb-3">{currentLabels.visitors}</h3>
        <div 
          className="text-3xl font-headline tabular-nums text-text-primary mb-1"
          aria-label="Today's visitors count"
        >
          2,315
        </div>
        <div className="text-xs text-text-secondary">
          +12% {currentLabels.vsYesterday}
        </div>
      </div>
    </div>
  )
}
