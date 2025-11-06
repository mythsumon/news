'use client'

import { useState } from 'react'

interface NewsCardProps {
  image: string
  category: string
  title: string
  author: string
  date: string
  href?: string
}

function NewsCard({ image, category, title, author, date, href = '#' }: NewsCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <a
      href={href}
      className="group block bg-white rounded-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 bg-accent-green/10 text-accent-green text-xs font-medium rounded mb-2">
          {category}
        </span>
        <h3 className="text-lg font-headline mb-3 line-clamp-2 group-hover:text-accent-green transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  )
}

interface MyanmarNewsSectionProps {
  locale?: 'KR' | 'EN' | 'MM'
}

export default function MyanmarNewsSection({ locale = 'KR' }: MyanmarNewsSectionProps) {
  const title = {
    KR: 'Myanmar News',
    EN: 'Myanmar News',
    MM: 'မြန်မာ သတင်းများ',
  }

  const subtitle = {
    KR: 'Headlines & latest updates',
    EN: 'Headlines & latest updates',
    MM: 'ခေါင်းစဉ်များနှင့် နောက်ဆုံးသတင်းများ',
  }

  const viewAll = {
    KR: 'View all →',
    EN: 'View all →',
    MM: 'အားလုံးကြည့်ရန် →',
  }

  const newsItems = {
    KR: [
      {
        image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&h=225&fit=crop',
        category: 'Notice',
        title: '양곤 시내 주요 지점 교통 정리 안내',
        author: 'Admin',
        date: '2025년 1월 15일',
      },
      {
        image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=225&fit=crop',
        category: 'Culture',
        title: '미얀마 전통 축제 기간 특별 행사 안내',
        author: '이지은',
        date: '2025년 1월 14일',
      },
      {
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop',
        category: 'Life',
        title: '2025년 신규 병원 및 클리닉 오픈 소식',
        author: '박준호',
        date: '2025년 1월 13일',
      },
    ],
    EN: [
      {
        image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&h=225&fit=crop',
        category: 'Notice',
        title: 'Traffic Updates for Major Yangon Locations',
        author: 'Admin',
        date: 'January 15, 2025',
      },
      {
        image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=225&fit=crop',
        category: 'Culture',
        title: 'Special Events During Myanmar Traditional Festival',
        author: 'Lee Ji-eun',
        date: 'January 14, 2025',
      },
      {
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop',
        category: 'Life',
        title: 'New Hospitals and Clinics Opening in 2025',
        author: 'Park Jun-ho',
        date: 'January 13, 2025',
      },
    ],
    MM: [
      {
        image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&h=225&fit=crop',
        category: 'အကြောင်းကြားချက်',
        title: 'ရန်ကုန်မြို့တွင်း အဓိကနေရာများ ယာဉ်ကြောအခြေအနေ',
        author: 'Admin',
        date: '၁၅ ဇန်နဝါရီ ၂၀၂၅',
      },
      {
        image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=225&fit=crop',
        category: 'ယဉ်ကျေးမှု',
        title: 'မြန်မာရိုးရာ ပွဲတော်ကာလ ထူးခြားသော ပွဲများ',
        author: 'Lee Ji-eun',
        date: '၁၄ ဇန်နဝါရီ ၂၀၂၅',
      },
      {
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop',
        category: 'လူနေမှု',
        title: '၂၀၂၅ တွင် ဆေးရုံအသစ်များ ဖွင့်လှစ်မည်',
        author: 'Park Jun-ho',
        date: '၁၃ ဇန်နဝါရီ ၂၀၂၅',
      },
    ],
  }

  const items = newsItems[locale]

  return (
    <section className="py-10">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <h2 className="text-3xl font-headline text-text-primary mb-2">{title[locale]}</h2>
          <p className="text-text-secondary">{subtitle[locale]}</p>
        </div>
        <a
          href="/news"
          className="text-accent-green hover:text-accent-hover font-medium transition-colors"
        >
          {viewAll[locale]}
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
