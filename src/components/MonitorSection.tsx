'use client'

import { Reveal, StaggerItem } from './Reveal'

export default function MonitorSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-xs text-l-text-quaternary font-mono">5.0</span>
              <a href="/monitor" className="text-sm text-l-text-secondary hover:text-l-text transition-colors nav-link">
                Monitor →
              </a>
            </div>
            <h2 className="section-title max-w-sm">Understand progress at scale</h2>
            <p className="section-desc mt-4">
              Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          <Reveal delay={100}>
            <div className="card-panel p-4 hover-lift">
              <div className="grain absolute inset-0" style={{ top: 1 }} />
              <div className="relative">
                <div className="text-xs font-medium text-l-text-secondary mb-4">Issue count by created date</div>
                <div className="flex items-end gap-3 h-32">
                  {[14, 18, 12, 16, 10, 8, 6, 4, 2].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end" style={{ animation: `growUp 0.5s ease ${0.3 + i * 0.05}s both` }}>
                      <div className="rounded-t bg-l-text-quaternary/20 transition-all duration-300 hover:bg-l-text-quaternary/40" style={{ height: `${h * 6}px` }} />
                      <div className="h-1 bg-l-text-quaternary/40" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-l-text-quaternary">
                  <span>Feb 2025</span>
                  <span>Aug 2025</span>
                  <span>Nov 2025</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card-panel p-4 hover-lift">
              <div className="grain absolute inset-0" style={{ top: 1 }} />
              <div className="relative">
                <div className="text-xs font-medium text-l-text-secondary mb-4">Cycle time by agent</div>
                <div className="space-y-3">
                  {[
                    { name: 'Codex', color: '#FF7236', path: 'M0 15 Q50 18 100 10 Q150 5 200 8' },
                    { name: 'Cursor', color: '#5E6AD2', path: 'M0 10 Q50 5 100 12 Q150 15 200 10' },
                    { name: 'No Agent', color: '#8A8F98', path: 'M0 8 Q50 12 100 14 Q150 10 200 6' },
                  ].map((line, i) => (
                    <div key={line.name} className="flex items-center gap-3" style={{ animation: `fadeSlideRight 0.4s ease ${0.4 + i * 0.1}s both` }}>
                      <div className="w-16 text-[10px] text-l-text-quaternary">{line.name}</div>
                      <div className="flex-1 h-4 relative">
                        <svg className="w-full h-full" viewBox="0 0 200 20" preserveAspectRatio="none">
                          <path d={line.path} stroke={line.color} strokeWidth="1.5" fill="none">
                            <animate attributeName="stroke-dashoffset" from="400" to="0" dur="1.5s" begin={`${0.5 + i * 0.2}s`} fill="freeze" />
                            <animate attributeName="stroke-dasharray" from="0 400" to="400 0" dur="1.5s" begin={`${0.5 + i * 0.2}s`} fill="freeze" />
                          </path>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className="md:col-span-2">
            <div className="card-panel p-4 hover-lift">
              <div className="grain absolute inset-0" style={{ top: 1 }} />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-medium text-l-text-secondary">Weekly Pulse for Apr 26</div>
                  <button className="flex items-center gap-2 text-xs text-l-text-quaternary hover:text-l-text-secondary transition-colors">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M5.604 2.41 12.834 6.912a1.375 1.375 0 0 1-.02 2.345L5.585 13.6a1.375 1.375 0 0 1-2.083-1.18V3.576A1.375 1.375 0 0 1 5.604 2.41Z" />
                    </svg>
                    Listen
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-l-text-tertiary">Projects</span>
                      <div className="flex-1 h-px bg-l-border" />
                    </div>

                    <div className="space-y-3">
                      {[
                        { status: 'At risk', statusColor: 'text-l-red', dotColor: 'bg-l-red/30', name: 'UI refresh', author: 'romain', time: '1 day ago',
                          items: ['iOS implementation is mostly complete, but Android updates are still work in progress', 'Risk of timeline slip if remaining design decisions aren\'t finalized soon'] },
                        { status: 'On track', statusColor: 'text-l-green', dotColor: 'bg-l-green/30', name: 'Tokyo launch', author: 'julian', time: '3 hours ago',
                          items: ['Localization efforts have been completed', 'Everything else on track for launch in early September'] },
                      ].map((p, i) => (
                        <div key={p.name} style={{ animation: `fadeIn 0.4s ease ${0.6 + i * 0.15}s both` }}>
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-3 h-3 rounded-full ${p.dotColor} flex items-center justify-center`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${p.status === 'At risk' ? 'bg-l-red' : 'bg-l-green'}`} />
                            </div>
                            <span className="text-xs font-medium">{p.name}</span>
                            <span className={`text-[10px] ${p.statusColor}`}>{p.status}</span>
                            <span className="text-[10px] text-l-text-quaternary">By {p.author} · {p.time}</span>
                          </div>
                          <ul className="ml-5 space-y-0.5 text-xs text-l-text-secondary list-disc">
                            {p.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        @keyframes growUp {
          from { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
          to { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
