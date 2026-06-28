import { Star } from 'lucide-react'

interface TestimonialProps {
  name: string
  text: string
  rating: number
}

export function TestimonialCard({ name, text, rating }: TestimonialProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground mb-4 flex-1 leading-relaxed">{text}</p>
      <p className="font-semibold text-foreground">{name}</p>
      <p className="text-sm text-muted-foreground">Verified Patient</p>
    </div>
  )
}
