import { Check } from 'lucide-react'

interface PackageCardProps {
  name: string
  price: string
  duration: string
  tests: string[]
  description: string
  popular?: boolean
}

export function PackageCard({ name, price, duration, tests, description, popular }: PackageCardProps) {
  return (
    <div className={`rounded-xl border transition-all h-full flex flex-col ${popular ? 'border-accent bg-accent/5 ring-2 ring-accent shadow-lg' : 'border-border bg-card'}`}>
      {popular && (
        <div className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 text-center">
          MOST POPULAR
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="mb-6">
          <p className="text-3xl font-bold text-primary">{price}</p>
          <p className="text-xs text-muted-foreground mt-1">{duration}</p>
        </div>

        <div className="space-y-2 flex-1 mb-6">
          {tests.map((test) => (
            <div key={test} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{test}</span>
            </div>
          ))}
        </div>

        <button className={`w-full py-2 rounded-lg font-medium transition-colors ${popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-muted text-foreground hover:bg-muted/80'}`}>
          Select Package
        </button>
      </div>
    </div>
  )
}
