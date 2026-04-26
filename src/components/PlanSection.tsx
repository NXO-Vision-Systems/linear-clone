export default function PlanSection() {
  return (
    <section className="py-16 md:py-24 border-t border-l-border/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-xs text-l-text-quaternary font-mono">2.0</span>
            <a href="/plan" className="text-sm text-l-text-secondary hover:text-l-text transition-colors">
              Plan →
            </a>
          </div>
          <h2 className="section-title max-w-xs">Define the product direction</h2>
          <p className="section-desc mt-4">
            Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.
          </p>
        </div>

        {/* Timeline mockup */}
        <div className="card-panel p-0 overflow-hidden">
          <div className="grain absolute inset-0" style={{ top: 1 }} />
          <div className="relative p-6">
            {/* Timeline header */}
            <div className="flex items-center gap-6 mb-8 overflow-x-auto text-xs text-l-text-quaternary">
              {['FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'].map((m) => (
                <span key={m} className="flex-shrink-0 w-16">{m}</span>
              ))}
            </div>

            {/* Timeline grid lines */}
            <div className="absolute inset-0 pointer-events-none" style={{ top: 40 }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="absolute left-0 right-0 border-t border-l-border/20" style={{ top: `${i * 25}%` }} />
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-3 relative z-10">
              {/* UI Refresh */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 min-w-[180px]">
                  <div className="w-3 h-3 rounded bg-l-teal/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-sm bg-l-teal" />
                  </div>
                  <span className="text-xs text-l-text-secondary">UI Refresh</span>
                  <svg className="w-3 h-3 text-l-yellow" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M5.578 10.648a.66.66 0 0 1-.558-.186L2.999 8.441a.656.656 0 0 1 .928-.928l1.4 1.4L7.94 4.126a.656.656 0 0 1 1.04-.15L11 5.997a.656.656 0 0 1-.928.928L8.672 5.524 6.06 10.312a.66.66 0 0 1-.482.336" />
                  </svg>
                </div>
                <div className="flex-1 h-6 rounded-md bg-l-red/10 border border-l-red/20 relative overflow-hidden">
                  <div className="absolute left-[35%] right-[18%] inset-y-0 bg-l-red/15 border-x border-l-red/30" />
                  <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-l-text-quaternary" />
                  <div className="absolute right-[18%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-l-text-quaternary" />
                </div>
              </div>

              {/* Split fares */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 min-w-[180px]">
                  <div className="w-3 h-3 rounded bg-l-green/20 flex items-center justify-center">
                    <svg className="w-2 h-2" viewBox="0 0 16 16" fill="var(--color-green)">
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="text-xs text-l-text-secondary">Split fares</span>
                  <svg className="w-3 h-3 text-l-green" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M5.578 10.648a.66.66 0 0 1-.558-.186L2.999 8.441a.656.656 0 0 1 .928-.928l1.4 1.4L7.94 4.126a.656.656 0 0 1 1.04-.15L11 5.997a.656.656 0 0 1-.928.928L8.672 5.524 6.06 10.312a.66.66 0 0 1-.482.336" />
                  </svg>
                </div>
                <div className="flex-1 h-6 rounded-md bg-l-green/8 border border-l-green/15 relative overflow-hidden">
                  <div className="absolute left-[20%] right-[15%] inset-y-0 bg-l-green/12 border-x border-l-green/20" />
                  <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-l-text-quaternary" />
                  <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-l-text-quaternary" />
                </div>
              </div>

              {/* Autonomy status */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 min-w-[180px]">
                  <div className="w-3 h-3 rounded bg-l-blue/20 flex items-center justify-center">
                    <svg className="w-2 h-2" viewBox="0 0 16 16" fill="var(--color-blue)">
                      <circle cx="8" cy="8" r="6" />
                    </svg>
                  </div>
                  <span className="text-xs text-l-text-secondary">Autonomy status clarity</span>
                </div>
                <div className="flex-1 h-6 rounded-md bg-l-blue/8 border border-l-blue/15 relative overflow-hidden">
                  <div className="absolute left-[28%] right-[40%] inset-y-0 bg-l-blue/12 border-x border-l-blue/20" />
                  <div className="absolute left-[28%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-l-text-quaternary" />
                </div>
              </div>
            </div>

            {/* Initiatives sidebar */}
            <div className="mt-8 rounded-lg border border-l-border bg-l-bg-secondary p-4">
              <div className="text-xs font-medium text-l-text-secondary mb-3">Initiatives</div>
              <div className="space-y-2">
                {[
                  { name: 'Core Product', count: 99, color: 'bg-l-teal' },
                  { name: 'Infra stability', count: 28, color: 'bg-l-teal' },
                  { name: 'Autonomous systems', count: 16, color: 'bg-l-teal' },
                  { name: 'Mobile apps', count: 8, color: 'bg-l-teal' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded ${item.color}`} />
                      <span className="text-xs text-l-text-secondary">{item.name}</span>
                    </div>
                    <span className="text-xs text-l-text-quaternary">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
