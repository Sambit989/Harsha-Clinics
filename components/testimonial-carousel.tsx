'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  text: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <div className="relative">
      <div className="bg-card border border-border rounded-xl p-8">
        <div className="flex gap-1 mb-6">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
          ))}
        </div>

        <p className="text-lg text-foreground mb-6 leading-relaxed italic">
          &quot;{testimonials[currentIndex].text}&quot;
        </p>

        <div>
          <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
          <p className="text-sm text-muted-foreground">Verified Patient</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setAutoplay(false)
              }}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-8' : 'bg-muted'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-4">
        {currentIndex + 1} of {testimonials.length}
      </p>
    </div>
  )
}
