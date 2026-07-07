export function ServiceCard({ title, items, icon }: { title: string; items: string[]; icon: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">{icon}</div>
        <h3 className="font-bold text-lg text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2 flex-1">
        {items.slice(0, 4).map((item) => (
          <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary font-bold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
        {items.length > 4 && (
          <li className="text-sm text-primary font-medium">+{items.length - 4} more</li>
        )}
      </ul>
    </div>
  )
}
