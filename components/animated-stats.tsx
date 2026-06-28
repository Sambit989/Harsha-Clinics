'use client'

import { useEffect, useState } from 'react'

interface Stat {
  label: string
  value: string
  icon: string
}

interface AnimatedStatsProps {
  stats: Stat[]
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className={`bg-card border border-border rounded-lg p-6 text-center transition-all transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
          <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
          <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
