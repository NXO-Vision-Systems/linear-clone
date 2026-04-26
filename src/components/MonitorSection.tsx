export default function MonitorSection() {
  return (
    <section className="py-16 md:py-24 border-t border-l-border/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-xs text-l-text-quaternary font-mono">5.0</span>
            <a href="/monitor" className="text-sm text-l-text-secondary hover:text-l-text transition-colors">
              Monitor →
            </a>
          </div>
          <h2 className="section-title max-w-sm">Understand progress at scale</h2>
          <p className="section-desc mt-4">
            Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention.
          </p>
        </div>

        {/* Monitor grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart 1 - Issue count */}
          <div className="card-panel p-4">
            <div className="grain absolute inset-0" style={{ top: 1 }} />
            <div className="relative">
              <div className="text-xs font-medium text-l-text-secondary mb-4">Issue count by created date</div>
              <div className="flex items-end gap-3 h-32">
                {[14, 18, 12, 16, 10, 8, 6, 4, 2].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div className="rounded-t bg-l-text-quaternary/20" style={{ height: `${h * 6}px` }} />
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

          {/* Chart 2 - Cycle time */}
          <div className="card-panel p-4">
            <div className="grain absolute inset-0" style={{ top: 1 }} />
            <div className="relative">
              <div className="text-xs font-medium text-l-text-secondary mb-4">Cycle time by agent</div>
              <div className="space-y-3">
                {/* Codex line */}
                <div className="flex items-center gap-3">
                  <div className="w-16 text-[10px] text-l-text-quaternary">Codex</div>
                  <div className="flex-1 h-4 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 20" preserveAspectRatio="none">
                      <path d="M0 15 Q50 18 100 10 Q150 5 200 8" stroke="#FF7236" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </div>
                {/* Cursor line */}
                <div className="flex items-center gap-3">
                  <div className="w-16 text-[10px] text-l-text-quaternary">Cursor</div>
                  <div className="flex-1 h-4 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 20" preserveAspectRatio="none">
                      <path d="M0 10 Q50 5 100 12 Q150 15 200 10" stroke="#5E6AD2" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </div>
                {/* No Agent line */}
                <div className="flex items-center gap-3">
                  <div className="w-16 text-[10px] text-l-text-quaternary">No Agent</div>
                  <div className="flex-1 h-4 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 20" preserveAspectRatio="none">
                      <path d="M0 8 Q50 12 100 14 Q150 10 200 6" stroke="#8A8F98" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Pulse */}
          <div className="card-panel p-4 md:col-span-2">
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
                {/* Project status */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-l-text-tertiary">Projects</span>
                    <div className="flex-1 h-px bg-l-border" />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-l-red/30 flex items-center justify-center">
                          <svg className="w-2 h-2 text-l-red" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M9.626 3.832a.75.75 0 0 1 .637.212l2.31 2.31a.75.75 0 0 1-1.06 1.06l-1.602-1.6-2.985 5.472a.75.75 0 0 1-1.189.171l-2.31-2.31a.75.75 0 0 1 1.06-1.06l1.602 1.6 2.985-5.472a.75.75 0 0 1 .552-.383" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium">UI refresh</span>
                        <span className="text-[10px] text-l-red">At risk</span>
                        <span className="text-[10px] text-l-text-quaternary">By romain · 1 day ago</span>
                      </div>
                      <ul className="ml-5 space-y-0.5 text-xs text-l-text-secondary list-disc">
                        <li>iOS implementation is mostly complete, but Android updates are still work in progress</li>
                        <li>Risk of timeline slip if remaining design decisions aren't finalized soon</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-l-green/30 flex items-center justify-center">
                          <svg className="w-2 h-2 text-l-green" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M12.68 5.703a.75.75 0 0 1 .071 1.058L9.72 10.226a.75.75 0 0 1-1.188-.077l-1.767-2.65-2.387 2.728a.75.75 0 1 1-1.128-.988L6.28 5.774a.75.75 0 0 1 1.188.078l1.767 2.65 2.386-2.728a.75.75 0 0 1 1.059-.07" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium">Tokyo launch</span>
                        <span className="text-[10px] text-l-green">On track</span>
                        <span className="text-[10px] text-l-text-quaternary">By julian · 3 hours ago</span>
                      </div>
                      <ul className="ml-5 space-y-0.5 text-xs text-l-text-secondary list-disc">
                        <li>Localization efforts have been completed</li>
                        <li>Everything else on track for launch in early September</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
