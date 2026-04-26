import { Reveal, StaggerItem } from './Reveal'

const quotes = [
  {
    text: 'You just have to use it and you will see, you will just feel it.',
    author: 'Gabriel Peal',
    company: 'OpenAI',
    gradient: 'linear-gradient(180deg, rgba(178, 213, 255, 0.7) 0%, rgba(223, 209, 255, 0.7) 100%)',
  },
  {
    text: 'Our speed is intense and Linear helps us be action biased.',
    author: 'Nik Koblov',
    company: 'Ramp',
    gradient: '#e4f222',
  },
  {
    text: 'Linear is excellent, just excellent. It has the right opinions for fast moving teams.',
    author: 'Kaz Nejatian',
    company: 'Opendoor',
    gradient: '#1C85E8',
  },
]

export default function QuotesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <StaggerItem key={q.author} index={i}>
              <div
                className="rounded-xl p-6 flex flex-col justify-between min-h-[200px] hover-lift cursor-default"
                style={{ background: q.gradient }}
              >
                <blockquote className="text-sm text-[#08090a] leading-relaxed font-medium">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-[#08090a]">{q.author}</div>
                  <div className="text-xs text-[#08090a]/60">{q.company}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center text-sm text-l-text-secondary">
            Linear powers over <strong className="text-l-text">25,000</strong> product teams.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
