'use client'

interface HeroAdCardProps {
  image?: string
  locale?: 'KR' | 'EN' | 'MM'
}

export default function HeroAdCard({ 
  image = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop',
  locale = 'KR' 
}: HeroAdCardProps) {
  const ctaText = {
    KR: 'Learn More →',
    EN: 'Learn More →',
    MM: 'ပိုမိုလေ့လာရန် →',
  }

  return (
    <a
      href="/r/ad-hero"
      rel="sponsored"
      aria-label="Sponsored advertisement"
      className="group relative block w-full bg-white rounded-card overflow-hidden border border-accent-border hover:border-accent-hover hover:shadow-md transition-all duration-200 h-[160px] md:min-h-[220px] md:h-auto md:aspect-video flex items-center justify-center"
    >
      {/* AD Badge */}
      <div className="absolute top-2 left-2 z-10 bg-accent-green text-white text-xs px-2 py-1 rounded-full font-medium">
        AD
      </div>

      {/* Image */}
      {image && (
        <img
          src={image}
          alt="Advertisement"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      )}

      {/* Optional CTA Text */}
      <div className="absolute bottom-2 right-2 z-10">
        <span className="text-sm font-medium text-accent-hover bg-white/90 px-2 py-1 rounded">
          {ctaText[locale]}
        </span>
      </div>
    </a>
  )
}
