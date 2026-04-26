'use client'

import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export default function Marquee({ children, speed = 30, pauseOnHover = true, className = '' }: MarqueeProps) {
  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className="flex shrink-0 gap-10 animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: 'running',
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'running'
        }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 gap-10 animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: 'running',
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
