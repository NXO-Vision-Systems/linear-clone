import Marquee from './Marquee'

const logos = [
  { name: 'Ramp', width: 101 },
  { name: 'Cash App', width: 70 },
  { name: 'Vercel', width: 82 },
  { name: 'OpenAI', width: 90 },
  { name: 'Runway', width: 97 },
  { name: 'Rippling', width: 86 },
  { name: 'Scale', width: 64 },
  { name: 'Descript', width: 85 },
]

export default function Logos() {
  return (
    <section className="py-8 border-y border-l-border/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Marquee speed={40} pauseOnHover={true}>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex-shrink-0 opacity-30 hover:opacity-60 transition-opacity duration-300 flex items-center h-5"
            >
              <div
                className="h-4 rounded bg-l-text-tertiary/50"
                style={{ width: logo.width }}
                title={logo.name}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
