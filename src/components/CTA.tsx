import { Reveal } from './Reveal'

export default function CTA() {
  return (
    <section className="py-24 md:py-32 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full animate-glow-pulse" style={{
          background: 'radial-gradient(ellipse at center, rgba(94, 106, 210, 0.05) 0%, transparent 70%)',
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-md mx-auto">
            Built for the future. Available today.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="/signup"
              className="btn-glow rounded-md bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition-colors"
            >
              Get started
            </a>
            <a
              href="/contact/sales"
              className="rounded-md border border-l-border px-6 py-2.5 text-sm font-medium text-l-text-secondary hover:text-l-text hover:border-l-border-secondary transition-colors"
            >
              Contact sales
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
