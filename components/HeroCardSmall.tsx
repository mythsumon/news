'use client'

import { useState } from 'react'

interface HeroCardSmallProps {
  image: string
  category: string
  title: string
  author: string
  date: string
  href?: string
  variant?: 'left' | 'right'
}

export default function HeroCardSmall({
  image,
  category,
  title,
  author,
  date,
  href = '#',
  variant = 'right',
}: HeroCardSmallProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <a
      href={href}
      className="group flex flex-row gap-4 w-full rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 bg-white"
    >
      {/* Image - Always left on mobile, variant on desktop */}
      <div className={`relative w-2/5 md:w-2/5 h-48 md:h-full min-h-[200px] flex-shrink-0 overflow-hidden ${
        variant === 'left' ? 'md:order-1' : 'md:order-2'
      }`}>
        {/* Skeleton Loader */}
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

      {/* Content */}
      <div className={`flex-1 flex flex-col justify-between p-4 md:p-6 ${
        variant === 'left' ? 'md:order-2' : 'md:order-1'
      }`}>
        <div>
          {/* Category */}
          <span className="inline-block px-2 py-1 bg-accent-green/10 text-accent-green text-xs font-medium rounded mb-2">
            {category}
          </span>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-headline mb-3 line-clamp-2 group-hover:text-accent-green transition-colors">
            {title}
          </h3>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  )
}
