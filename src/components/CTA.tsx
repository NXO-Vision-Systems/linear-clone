export default function CTA() {
  return (
    <section className="py-24 md:py-32 text-center">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-md mx-auto">
          Built for the future. Available today.
        </h2>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/signup"
            className="rounded-md bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition-colors"
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
      </div>
    </section>
  )
}
