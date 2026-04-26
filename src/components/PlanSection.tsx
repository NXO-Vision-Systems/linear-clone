'use client'

import { Reveal, StaggerItem } from './Reveal'

export default function PlanSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-xs text-l-text-quaternary font-mono">2.0</span>
              <a href="/plan" className="text-sm text-l-text-secondary hover:text-l-text transition-colors nav-link">
                Plan →
              </a>
            </div>
            <h2 className="section-title max-w-xs">Define the product direction</h2>
            <p className="section-desc mt-4">
              Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="card-panel p-0 overflow-hidden">
            <div className="grain absolute inset-0" style={{ top: 1 }} />
            <div className="glow absolute inset-0" />
            <div className="relative p-6">
              <div className="flex items-center gap-6 mb-8 overflow-x-auto text-xs text-l-text-quaternary">
                {['FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'].map((m, i) => (
                  <span key={m} className="flex-shrink-0 w-16" style={{ animation: `fadeIn 0.3s ease ${0.3 + i * 0.03}s both` }}>{m}</span>
                ))}
              </div>

              <div className="space-y-3 relative z-10">
                {/* UI Refresh */}
                <div className="flex items-center gap-3" style={{ animation: 'fadeSlideRight 0.5s ease 0.5s both' }}>
                  <div className="flex items-center gap-2 min-w-[180px]">
                    <div className="w-3 h-3 rounded bg-l-teal/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-sm bg-l-teal" />
                    </div>
                    <span className="text-xs text-l-text-secondary">UI Refresh</span>
                  </div>
                  <div className="flex-1 h-6 rounded-md bg-l-red/10 border border-l-red/20 relative overflow-hidden">
                    <div className="absolute left-[35%] right-[18%] inset-y-0 bg-l-red/15 border-x border-l-red/30" />
                    <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-l-text-quaternary" />
                    <div className="absolute right-[18%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-l-text-quaternary" />
                  </div>
                </div>

                {/* Split fares */}
                <div className="flex items-center gap-3" style={{ animation: 'fadeSlideRight 0.5s ease 0.6s both' }}>
                  <div className="flex items-center gap-2 min-w-[180px]">
                    <div className="w-3 h-3 rounded bg-l-green/20 flex items-center justify-center">
                      <svg className="w-2 h-2" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="text-xs text-l-text-secondary">Split fares</span>
                  </div>
                  <div className="flex-1 h-6 rounded-md bg-l-green/8 border border-l-green/15 relative overflow-hidden">
                    <div className="absolute left-[20%] right-[15%] inset-y-0 bg-l-green/12 border-x border-l-green/20" />
                    <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-l-text-quaternary" />
                    <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-l-text-quaternary" />
                  </div>
                </div>

                {/* Autonomy status */}
                <div className="flex items-center gap-3" style={{ animation: 'fadeSlideRight 0.5s ease 0.7s both' }}>
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

              <div className="mt-8 rounded-lg border border-l-border bg-l-bg-secondary p-4" style={{ animation: 'fadeIn 0.5s ease 0.8s both' }}>
                <div className="text-xs font-medium text-l-text-secondary mb-3">Initiatives</div>
                <div className="space-y-2">
                  {[
                    { name: 'Core Product', count: 99, color: 'bg-l-teal' },
                    { name: 'Infra stability', count: 28, color: 'bg-l-teal' },
                    { name: 'Autonomous systems', count: 16, color: 'bg-l-teal' },
                    { name: 'Mobile apps', count: 8, color: 'bg-l-teal' },
                  ].map((item, i) => (
                    <div key={item.name} className="flex items-center justify-between py-1" style={{ animation: `fadeIn 0.3s ease ${0.9 + i * 0.05}s both` }}>
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
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
