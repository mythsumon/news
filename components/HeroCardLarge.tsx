'use client'

import { useState } from 'react'

interface HeroCardLargeProps {
  image: string
  category: string
  title: string
  author: string
  date: string
  href?: string
}

export default function HeroCardLarge({
  image,
  category,
  title,
  author,
  date,
  href = '#',
}: HeroCardLargeProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <a
      href={href}
      className="group relative block w-full h-full min-h-[400px] md:min-h-[500px] rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
    >
      {/* Skeleton Loader */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Image */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
        {/* Category Pill */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-accent-green text-white text-sm font-medium rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-headline mb-4 line-clamp-2 group-hover:text-accent-green transition-colors">
          {title}
        </h2>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-200">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  )
}
