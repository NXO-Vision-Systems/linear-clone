const logos = [
  { name: 'Ramp', width: 101 },
  { name: 'Cash App', width: 70 },
  { name: 'Vercel', width: 82 },
  { name: 'OpenAI', width: 90 },
  { name: 'Runway', width: 97 },
]

export default function Logos() {
  return (
    <section className="py-8 border-y border-l-border/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ul className="flex items-center justify-between gap-8 overflow-hidden">
          {logos.map((logo) => (
            <li key={logo.name} className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity">
              <div
                className="h-5 rounded bg-l-text-tertiary/40"
                style={{ width: logo.width }}
                title={logo.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
