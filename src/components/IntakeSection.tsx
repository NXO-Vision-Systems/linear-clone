const issues = [
  { id: 'ENG-2085', title: 'Reduce UI flicker during autonomy...', status: 'backlog' },
  { id: 'ENG-2094', title: 'Add buffering for autonomy event streams', status: 'backlog' },
  { id: 'ENG-2092', title: 'Reduce startup delay caused by vehicle sync', status: 'backlog' },
  { id: 'ENG-2200', title: 'Fix delayed route updates during rerouting', status: 'backlog' },
]

const todoIssues = [
  { id: 'ENG-926', title: 'Remove UI inconsistencies', labels: ['Bug', 'Design'] },
  { id: 'ENG-2088', title: 'TypeError: Cannot read properties', labels: ['Bug'] },
  { id: 'ENG-924', title: 'Upgrade to Claude Opus 4.5', labels: ['AI'] },
  { id: 'ENG-1882', title: 'Optimize load times', labels: ['Performance'] },
]

const inProgress = [
  { id: 'ENG-1487', title: 'Remove contentData from GraphQL API', cycle: '61039' },
  { id: 'MKT-1028', title: 'Launch page assets', labels: ['Design'] },
  { id: 'ENG-2187', title: 'Prevent duplicate ride requests on poor...', labels: ['Bug', '62048'] },
]

const done = [
  { id: 'ENG-2074', title: 'Clean up deprecated APIs...', labels: ['API', '61002'] },
  { id: 'ENG-1912', title: 'Reduce latency in autonomy st...', labels: ['61005'] },
  { id: 'ENG-1951', title: 'Reduce ETA fluctuations durin...', labels: ['61202'] },
  { id: 'ENG-1960', title: 'Improve fallback messaging', labels: ['UI', '61149'] },
  { id: 'ENG-1991', title: 'Improve rider visibility into veh...', labels: [] },
]

export default function IntakeSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-xs text-l-text-quaternary font-mono">1.0</span>
            <a href="/intake" className="text-sm text-l-text-secondary hover:text-l-text transition-colors">
              Intake →
            </a>
          </div>
          <h2 className="section-title max-w-xs">Make product operations self-driving</h2>
          <p className="section-desc mt-4">
            Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team.
          </p>
        </div>

        {/* Board illustration */}
        <div className="card-panel p-0 overflow-hidden">
          <div className="grain absolute inset-0" style={{ top: 1 }} />
          <div className="flex gap-0 p-3 overflow-x-auto">
            {/* Backlog */}
            <div className="min-w-[200px] flex-1 border-r border-l-border px-2">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-l-text-quaternary" viewBox="0 0 14 14" fill="currentColor">
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                  <span className="text-xs text-l-text-secondary">Backlog</span>
                  <span className="text-xs text-l-text-quaternary">{issues.length}</span>
                </div>
              </div>
              <div className="space-y-1.5">
                {issues.map((i) => (
                  <div key={i.id} className="rounded-md bg-l-bg-tertiary/50 p-2 border border-l-border/50">
                    <div className="text-[10px] text-l-text-quaternary font-mono mb-0.5">{i.id}</div>
                    <div className="text-xs text-l-text-secondary leading-snug truncate">{i.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Todo */}
            <div className="min-w-[200px] flex-1 border-r border-l-border px-2">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-l-text-quaternary" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="text-xs text-l-text-secondary">Todo</span>
                  <span className="text-xs text-l-text-quaternary">{todoIssues.length}</span>
                </div>
              </div>
              <div className="space-y-1.5">
                {todoIssues.map((i) => (
                  <div key={i.id} className="rounded-md bg-l-bg-tertiary/50 p-2 border border-l-border/50">
                    <div className="text-[10px] text-l-text-quaternary font-mono mb-0.5">{i.id}</div>
                    <div className="text-xs text-l-text-secondary leading-snug truncate">{i.title}</div>
                    <div className="flex gap-1 mt-1">
                      {i.labels.map((l) => (
                        <span key={l} className="rounded px-1 py-0.5 text-[9px] bg-l-bg-tertiary text-l-text-quaternary">{l}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress */}
            <div className="min-w-[200px] flex-1 border-r border-l-border px-2">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#F2C94C" strokeWidth="1.5" />
                    <path fill="#F2C94C" d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 7 z" transform="translate(3.5,3.5)" />
                  </svg>
                  <span className="text-xs text-l-text-secondary">In Progress</span>
                  <span className="text-xs text-l-text-quaternary">{inProgress.length}</span>
                </div>
              </div>
              <div className="space-y-1.5">
                {inProgress.map((i) => (
                  <div key={i.id} className="rounded-md bg-l-bg-tertiary/50 p-2 border border-l-border/50">
                    <div className="text-[10px] text-l-text-quaternary font-mono mb-0.5">{i.id}</div>
                    <div className="text-xs text-l-text-secondary leading-snug truncate">{i.title}</div>
                    {i.labels && (
                      <div className="flex gap-1 mt-1">
                        {i.labels.map((l) => (
                          <span key={l} className="rounded px-1 py-0.5 text-[9px] bg-l-bg-tertiary text-l-text-quaternary">{l}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Done */}
            <div className="min-w-[200px] flex-1 px-2">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-l-indigo" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M4.5 7l2 2 3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs text-l-text-secondary">Done</span>
                  <span className="text-xs text-l-text-quaternary">{done.length}</span>
                </div>
              </div>
              <div className="space-y-1.5">
                {done.map((i) => (
                  <div key={i.id} className="rounded-md bg-l-bg-tertiary/50 p-2 border border-l-border/50">
                    <div className="text-[10px] text-l-text-quaternary font-mono mb-0.5">{i.id}</div>
                    <div className="text-xs text-l-text-secondary leading-snug truncate">{i.title}</div>
                    {i.labels && i.labels.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {i.labels.map((l) => (
                          <span key={l} className="rounded px-1 py-0.5 text-[9px] bg-l-bg-tertiary text-l-text-quaternary">{l}</span>
                        ))}
                      </div>
                    )}
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
