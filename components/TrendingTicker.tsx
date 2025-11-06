'use client'

import { useState, useRef, useEffect } from 'react'

interface TrendingTickerProps {
  headlines: string[]
  locale?: 'KR' | 'EN' | 'MM'
}

export default function TrendingTicker({ headlines, locale = 'KR' }: TrendingTickerProps) {
  const [isPaused, setIsPaused] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const label = {
    KR: 'TRENDING NOW:',
    EN: 'TRENDING NOW:',
    MM: 'လက်ရှိ ခေတ်စားနေသော:',
  }

  // Create multiple copies for seamless infinite loop
  const duplicatedHeadlines = [...headlines, ...headlines, ...headlines]

  useEffect(() => {
    if (!tickerRef.current || isPaused) return

    const ticker = tickerRef.current
    let animationFrame: number
    let position = 0
    const speed = 0.5 // pixels per frame
    let singleSetWidth = 0

    // Calculate width of one complete headline set
    const calculateSingleSetWidth = () => {
      if (ticker.children.length >= headlines.length) {
        // Calculate total width of first set of headlines
        let totalWidth = 0
        const gap = 32 // gap-8 = 32px
        
        for (let i = 0; i < headlines.length; i++) {
          const child = ticker.children[i] as HTMLElement
          if (child) {
            totalWidth += child.offsetWidth
            if (i < headlines.length - 1) {
              totalWidth += gap
            }
          }
        }
        
        singleSetWidth = totalWidth + 32 // Add padding (px-8 = 32px)
      }
    }

    const animate = () => {
      if (!isPaused && tickerRef.current) {
        // Calculate width on first run or if not set
        if (singleSetWidth === 0) {
          calculateSingleSetWidth()
          // Wait one frame for calculation
          animationFrame = requestAnimationFrame(animate)
          return
        }

        position -= speed

        // Reset position when we've scrolled through one complete set
        // This creates seamless infinite loop
        if (singleSetWidth > 0 && Math.abs(position) >= singleSetWidth) {
          position = position + singleSetWidth
        }

        ticker.style.transform = `translateX(${position}px)`
        animationFrame = requestAnimationFrame(animate)
      }
    }

    // Initial calculation after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      calculateSingleSetWidth()
    }, 100)

    // Recalculate on resize
    const resizeObserver = new ResizeObserver(() => {
      calculateSingleSetWidth()
    })

    if (tickerRef.current) {
      resizeObserver.observe(tickerRef.current)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      resizeObserver.disconnect()
      clearTimeout(timeoutId)
    }
  }, [isPaused, headlines.length])

  return (
    <div className="bg-text-primary text-white py-3 overflow-hidden relative">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-6 md:px-8 font-bold text-sm md:text-base whitespace-nowrap bg-accent-green py-2 z-10">
          {label[locale]}
        </div>
        <div
          ref={wrapperRef}
          className="flex-1 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={tickerRef}
            className="flex items-center gap-8 px-8"
            style={{ willChange: 'transform' }}
          >
            {duplicatedHeadlines.map((headline, index) => (
              <span key={index} className="text-sm md:text-base whitespace-nowrap">
                {headline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
