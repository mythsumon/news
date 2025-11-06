'use client'

import { useState } from 'react'

interface KoreanDirectorySectionProps {
  locale?: 'KR' | 'EN' | 'MM'
}

export default function KoreanDirectorySection({ locale = 'KR' }: KoreanDirectorySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedCity, setSelectedCity] = useState<string>('all')

  const title = {
    KR: 'Korean Directory',
    EN: 'Korean Directory',
    MM: 'ကိုရီးယား လမ်းညွှန်',
  }

  const subtitle = {
    KR: 'Find Korean restaurants, clinics, and schools in Myanmar',
    EN: 'Find Korean restaurants, clinics, and schools in Myanmar',
    MM: 'မြန်မာနိုင်ငံရှိ ကိုရီးယား စားသောက်ဆိုင်၊ ဆေးခန်းနှင့် ကျောင်းများ ရှာဖွေရန်',
  }

  const categories = {
    KR: [
      { value: 'all', label: '전체', icon: '' },
      { value: 'restaurant', label: '식당', icon: '🍜' },
      { value: 'hospital', label: '병원', icon: '🏥' },
      { value: 'academy', label: '학원', icon: '📚' },
      { value: 'transport', label: '교통', icon: '🚗' },
      { value: 'legal', label: '법률', icon: '⚖️' },
    ],
    EN: [
      { value: 'all', label: 'All', icon: '' },
      { value: 'restaurant', label: 'Restaurant', icon: '🍜' },
      { value: 'hospital', label: 'Hospital', icon: '🏥' },
      { value: 'academy', label: 'Academy', icon: '📚' },
      { value: 'transport', label: 'Transport', icon: '🚗' },
      { value: 'legal', label: 'Legal', icon: '⚖️' },
    ],
    MM: [
      { value: 'all', label: 'အားလုံး', icon: '' },
      { value: 'restaurant', label: 'စားသောက်ဆိုင်', icon: '🍜' },
      { value: 'hospital', label: 'ဆေးရုံ', icon: '🏥' },
      { value: 'academy', label: 'ကျောင်း', icon: '📚' },
      { value: 'transport', label: 'ပို့ဆောင်ရေး', icon: '🚗' },
      { value: 'legal', label: 'ဥပဒေ', icon: '⚖️' },
    ],
  }

  const cities = {
    KR: [
      { value: 'all', label: '전체' },
      { value: 'yangon', label: '양곤' },
      { value: 'mandalay', label: '만달레이' },
      { value: 'naypyidaw', label: '네피도' },
      { value: 'inle', label: '인레' },
    ],
    EN: [
      { value: 'all', label: 'All' },
      { value: 'yangon', label: 'Yangon' },
      { value: 'mandalay', label: 'Mandalay' },
      { value: 'naypyidaw', label: 'Naypyidaw' },
      { value: 'inle', label: 'Inle' },
    ],
    MM: [
      { value: 'all', label: 'အားလုံး' },
      { value: 'yangon', label: 'ရန်ကုန်' },
      { value: 'mandalay', label: 'မန္တလေး' },
      { value: 'naypyidaw', label: 'နေပြည်တော်' },
      { value: 'inle', label: 'အင်းလေး' },
    ],
  }

  const businesses = {
    KR: [
      {
        id: 1,
        name: 'Seoul Restaurant',
        category: '식당',
        city: '양곤',
        logo: '🍜',
        premium: true,
        phone: '09-1234-5678',
        address: 'Bahan, Yangon',
        map: 'Bahan Township, Yangon',
      },
      {
        id: 2,
        name: 'Korea Clinic',
        category: '병원',
        city: '양곤',
        logo: '🏥',
        premium: false,
        phone: '09-5555-1111',
        address: 'Tamwe, Yangon',
        map: 'Tamwe Township, Yangon',
      },
      {
        id: 3,
        name: 'Seoul Academy',
        category: '학원',
        city: '만달레이',
        logo: '📚',
        premium: true,
        phone: '09-3333-2222',
        address: 'Chanayethazan, Mandalay',
        map: 'Mandalay Downtown',
      },
      {
        id: 4,
        name: 'K-Taxi Service',
        category: '교통',
        city: '양곤',
        logo: '🚗',
        premium: false,
        phone: '09-7777-8888',
        address: 'Sanchaung, Yangon',
        map: 'Sanchaung Township, Yangon',
      },
      {
        id: 5,
        name: 'Seoul Legal Office',
        category: '법률',
        city: '양곤',
        logo: '⚖️',
        premium: true,
        phone: '09-9999-0000',
        address: 'Kyauktada, Yangon',
        map: 'Kyauktada Township, Yangon',
      },
      {
        id: 6,
        name: 'Busan Restaurant',
        category: '식당',
        city: '만달레이',
        logo: '🍜',
        premium: false,
        phone: '09-1111-2222',
        address: 'Pyigyidagun, Mandalay',
        map: 'Pyigyidagun Township, Mandalay',
      },
    ],
    EN: [
      {
        id: 1,
        name: 'Seoul Restaurant',
        category: 'Restaurant',
        city: 'Yangon',
        logo: '🍜',
        premium: true,
        phone: '09-1234-5678',
        address: 'Bahan, Yangon',
        map: 'Bahan Township, Yangon',
      },
      {
        id: 2,
        name: 'Korea Clinic',
        category: 'Hospital',
        city: 'Yangon',
        logo: '🏥',
        premium: false,
        phone: '09-5555-1111',
        address: 'Tamwe, Yangon',
        map: 'Tamwe Township, Yangon',
      },
      {
        id: 3,
        name: 'Seoul Academy',
        category: 'Academy',
        city: 'Mandalay',
        logo: '📚',
        premium: true,
        phone: '09-3333-2222',
        address: 'Chanayethazan, Mandalay',
        map: 'Mandalay Downtown',
      },
      {
        id: 4,
        name: 'K-Taxi Service',
        category: 'Transport',
        city: 'Yangon',
        logo: '🚗',
        premium: false,
        phone: '09-7777-8888',
        address: 'Sanchaung, Yangon',
        map: 'Sanchaung Township, Yangon',
      },
      {
        id: 5,
        name: 'Seoul Legal Office',
        category: 'Legal',
        city: 'Yangon',
        logo: '⚖️',
        premium: true,
        phone: '09-9999-0000',
        address: 'Kyauktada, Yangon',
        map: 'Kyauktada Township, Yangon',
      },
      {
        id: 6,
        name: 'Busan Restaurant',
        category: 'Restaurant',
        city: 'Mandalay',
        logo: '🍜',
        premium: false,
        phone: '09-1111-2222',
        address: 'Pyigyidagun, Mandalay',
        map: 'Pyigyidagun Township, Mandalay',
      },
    ],
    MM: [
      {
        id: 1,
        name: 'Seoul Restaurant',
        category: 'စားသောက်ဆိုင်',
        city: 'ရန်ကုန်',
        logo: '🍜',
        premium: true,
        phone: '09-1234-5678',
        address: 'Bahan, Yangon',
        map: 'Bahan Township, Yangon',
      },
      {
        id: 2,
        name: 'Korea Clinic',
        category: 'ဆေးရုံ',
        city: 'ရန်ကုန်',
        logo: '🏥',
        premium: false,
        phone: '09-5555-1111',
        address: 'Tamwe, Yangon',
        map: 'Tamwe Township, Yangon',
      },
      {
        id: 3,
        name: 'Seoul Academy',
        category: 'ကျောင်း',
        city: 'မန္တလေး',
        logo: '📚',
        premium: true,
        phone: '09-3333-2222',
        address: 'Chanayethazan, Mandalay',
        map: 'Mandalay Downtown',
      },
      {
        id: 4,
        name: 'K-Taxi Service',
        category: 'ပို့ဆောင်ရေး',
        city: 'ရန်ကုန်',
        logo: '🚗',
        premium: false,
        phone: '09-7777-8888',
        address: 'Sanchaung, Yangon',
        map: 'Sanchaung Township, Yangon',
      },
      {
        id: 5,
        name: 'Seoul Legal Office',
        category: 'ဥပဒေ',
        city: 'ရန်ကုန်',
        logo: '⚖️',
        premium: true,
        phone: '09-9999-0000',
        address: 'Kyauktada, Yangon',
        map: 'Kyauktada Township, Yangon',
      },
      {
        id: 6,
        name: 'Busan Restaurant',
        category: 'စားသောက်ဆိုင်',
        city: 'မန္တလေး',
        logo: '🍜',
        premium: false,
        phone: '09-1111-2222',
        address: 'Pyigyidagun, Mandalay',
        map: 'Pyigyidagun Township, Mandalay',
      },
    ],
  }

  const viewMore = {
    KR: 'View More Businesses',
    EN: 'View More Businesses',
    MM: 'ပိုမိုသော လုပ်ငန်းများ ကြည့်ရန်',
  }

  const catOptions = categories[locale]
  const cityOptions = cities[locale]
  const businessList = businesses[locale]

  const filteredBusinesses = businessList.filter((biz) => {
    if (selectedCategory !== 'all') {
      const categoryLabel = catOptions.find(c => c.value === selectedCategory)?.label
      if (biz.category !== categoryLabel) return false
    }
    if (selectedCity !== 'all') {
      const cityLabel = cityOptions.find(c => c.value === selectedCity)?.label
      if (biz.city !== cityLabel) return false
    }
    return true
  })

  return (
    <section className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-accent-border">
          <h2 className="text-3xl md:text-4xl font-headline text-[#111827] mb-2">
            {title[locale]}
          </h2>
          <p className="text-text-secondary">{subtitle[locale]}</p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-0 z-10 bg-white py-4 mb-6 -mx-4 md:-mx-8 px-4 md:px-8">
          {/* Category Row */}
          <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {catOptions.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-1.5 rounded-full py-1 px-4 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.value
                    ? 'bg-accent-green text-white'
                    : 'border border-accent-border text-[#111827] hover:border-accent-green/50'
                }`}
              >
                {cat.icon && <span>{cat.icon}</span>}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* City Row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {cityOptions.map((city) => (
              <button
                key={city.value}
                onClick={() => setSelectedCity(city.value)}
                className={`rounded-full py-1 px-4 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCity === city.value
                    ? 'bg-accent-green text-white'
                    : 'border border-accent-border text-[#111827] hover:border-accent-green/50'
                }`}
              >
                {city.label}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {filteredBusinesses.map((biz) => (
            <div
              key={biz.id}
              className="bg-white rounded-card p-4 md:p-5 shadow-sm hover:shadow-md border border-accent-border hover:border-accent-green/30 transition-all duration-200 h-full flex flex-col"
            >
              <div className="flex items-start gap-4">
                {/* Logo/Icon */}
                <div className="w-12 h-12 flex items-center justify-center text-3xl flex-shrink-0">
                  {biz.logo}
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                  {/* Business Name */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-headline text-lg text-[#111827] leading-tight">
                      {biz.name}
                    </h3>
                    {biz.premium && (
                      <span className="text-[#FACC15] text-lg flex-shrink-0">⭐</span>
                    )}
                  </div>

                  {/* City · Category */}
                  <p className="text-sm text-[#6B7280] mb-3">
                    {biz.city} · {biz.category}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-1 text-sm text-slate-500">
                    <div>Phone: {biz.phone}</div>
                    <div>Address: {biz.address}</div>
                    <div>Map: {biz.map}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center pt-4">
          <a
            href="/directory"
            className="text-accent-green hover:text-accent-hover hover:underline transition-all duration-200 inline-block"
          >
            {viewMore[locale]}
          </a>
        </div>
      </div>
    </section>
  )
}