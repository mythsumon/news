'use client'

import { useState } from 'react'
import UtilityBar from '@/components/UtilityBar'
import Header from '@/components/Header'
import PromoBanner from '@/components/PromoBanner'
import TrendingTicker from '@/components/TrendingTicker'
import HeroCardLarge from '@/components/HeroCardLarge'
import QuickStatsBoard from '@/components/QuickStatsBoard'
import HeroAdCard from '@/components/HeroAdCard'
import MyanmarNewsSection from '@/components/MyanmarNewsSection'
import MarketStatusSection from '@/components/MarketStatusSection'
import KoreanDirectorySection from '@/components/KoreanDirectorySection'
import MidPageAdSection from '@/components/MidPageAdSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<'KR' | 'EN' | 'MM'>('KR')

  const trendingHeadlines = {
    KR: [
      '환율 급변… KRW↔MMK 주간 전망',
      '양곤 신규 병원 오픈',
      '비자 정책 업데이트',
    ],
    EN: [
      'Exchange Rate Fluctuations: KRW↔MMK Weekly Forecast',
      'New Hospital Opens in Yangon',
      'Visa Policy Updates',
    ],
    MM: [
      'ငွေလဲလှယ်နှုန်း ပြောင်းလဲမှု: KRW↔MMK အပတ်စဉ် ခန့်မှန်းချက်',
      'ရန်ကုန်တွင် ဆေးရုံအသစ် ဖွင့်လှစ်',
      'နိုင်ငံကူးလက်မှတ် မူဝါဒ အပ်ဒိတ်များ',
    ],
  }

  const featureCard = {
    KR: {
      image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&h=450&fit=crop',
      category: '가이드',
      title: '미얀마 생활, 꼭 알아야 할 가이드 2025',
      author: '김민수',
      date: '2025년 1월 15일',
    },
    EN: {
      image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&h=450&fit=crop',
      category: 'Guide',
      title: 'Essential Guide to Living in Myanmar 2025',
      author: 'Kim Min-su',
      date: 'January 15, 2025',
    },
    MM: {
      image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&h=450&fit=crop',
      category: 'လမ်းညွှန်',
      title: 'မြန်မာနိုင်ငံတွင် နေထိုင်ရန်အတွက် အရေးကြီးသော လမ်းညွှန် ၂၀၂၅',
      author: 'Kim Min-su',
      date: '၁၅ ဇန်နဝါရီ ၂၀၂၅',
    },
  }

  const smallCards = {
    KR: [
      {
        image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=225&fit=crop',
        category: '문화',
        title: '미얀마 전통 문화 축제 소식',
        author: '이지은',
        date: '2025년 1월 14일',
      },
      {
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop',
        category: '라이프스타일',
        title: '양곤 최신 카페 추천 리스트',
        author: '박준호',
        date: '2025년 1월 13일',
      },
      {
        image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=225&fit=crop',
        category: '스포츠',
        title: '미얀마 리그 축구 경기 일정',
        author: '최영희',
        date: '2025년 1월 12일',
      },
    ],
    EN: [
      {
        image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=225&fit=crop',
        category: 'Culture',
        title: 'Myanmar Traditional Culture Festival News',
        author: 'Lee Ji-eun',
        date: 'January 14, 2025',
      },
      {
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop',
        category: 'Lifestyle',
        title: 'Latest Yangon Cafe Recommendations',
        author: 'Park Jun-ho',
        date: 'January 13, 2025',
      },
      {
        image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=225&fit=crop',
        category: 'Sports',
        title: 'Myanmar League Football Match Schedule',
        author: 'Choi Young-hee',
        date: 'January 12, 2025',
      },
    ],
    MM: [
      {
        image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=225&fit=crop',
        category: 'ယဉ်ကျေးမှု',
        title: 'မြန်မာရိုးရာ ယဉ်ကျေးမှု ပွဲတော် သတင်း',
        author: 'Lee Ji-eun',
        date: '၁၄ ဇန်နဝါရီ ၂၀၂၅',
      },
      {
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop',
        category: 'လူနေမှုပုံစံ',
        title: 'ရန်ကုန် လက်ရှိ ကော်ဖီဆိုင်များ အကြံပြုချက်',
        author: 'Park Jun-ho',
        date: '၁၃ ဇန်နဝါရီ ၂၀၂၅',
      },
      {
        image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=225&fit=crop',
        category: 'အားကစား',
        title: 'မြန်မာ လိဂ် ဘောလုံး ပွဲစဉ်',
        author: 'Choi Young-hee',
        date: '၁၂ ဇန်နဝါရီ ၂၀၂၅',
      },
    ],
  }

  const currentFeature = featureCard[currentLang]
  const currentSmallCards = smallCards[currentLang]

  return (
    <div className="min-h-screen bg-background">
      <UtilityBar />
      <Header currentLang={currentLang} onLangChange={setCurrentLang} />

      <main className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-10 py-6 md:py-8 pb-20 md:pb-8">
        {/* Promo Banner */}
        <div className="mt-8">
          <PromoBanner locale={currentLang} />
        </div>

        {/* Trending Ticker */}
        <TrendingTicker headlines={trendingHeadlines[currentLang]} locale={currentLang} />

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Large Feature Card */}
          <div className="lg:col-span-2">
            <HeroCardLarge
              image={currentFeature.image}
              category={currentFeature.category}
              title={currentFeature.title}
              author={currentFeature.author}
              date={currentFeature.date}
            />
          </div>

          {/* Right Column: Quick Stats + Ad */}
          <div className="flex flex-col gap-4 self-start">
            <QuickStatsBoard locale={currentLang} />
            <HeroAdCard locale={currentLang} />
          </div>
        </div>

        {/* Myanmar News Section */}
        <MyanmarNewsSection locale={currentLang} />

        {/* Market Status Info Section */}
        <MarketStatusSection locale={currentLang} />

        {/* Mid-Page Advertisement */}
        <MidPageAdSection locale={currentLang} />

        {/* Korean Directory Section */}
        <KoreanDirectorySection locale={currentLang} />
      </main>

      {/* Footer */}
      <Footer locale={currentLang} />

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-accent-border z-40 safe-area-inset-bottom">
        <div className="flex items-center justify-around py-2">
          <a href="/news" className="flex flex-col items-center gap-1 px-4 py-2 text-accent-green">
            <span className="text-xl">📰</span>
            <span className="text-xs font-medium">
              {currentLang === 'KR' ? '미얀마 뉴스' : currentLang === 'EN' ? 'Myanmar News' : 'မြန်မာ သတင်းများ'}
            </span>
          </a>
          <a href="/market" className="flex flex-col items-center gap-1 px-4 py-2 text-text-secondary">
            <span className="text-xl">💹</span>
            <span className="text-xs font-medium">
              {currentLang === 'KR' ? '시장현황정보' : currentLang === 'EN' ? 'Market Status' : 'စျေးကွက် အခြေအနေ'}
            </span>
          </a>
          <a href="/directory" className="flex flex-col items-center gap-1 px-4 py-2 text-text-secondary">
            <span className="text-xl">📍</span>
            <span className="text-xs font-medium">
              {currentLang === 'KR' ? '한인업체 / 주소록' : currentLang === 'EN' ? 'Korean Directory' : 'ကိုရီးယား လမ်းညွှန်'}
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
