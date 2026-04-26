export default function BuildSection() {
  return (
    <section className="py-16 md:py-24 border-t border-l-border/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-xs text-l-text-quaternary font-mono">3.0</span>
            <a href="/build" className="text-sm text-l-text-secondary hover:text-l-text transition-colors">
              Build →
            </a>
          </div>
          <h2 className="section-title max-w-sm">Move work forward across teams and agents</h2>
          <p className="section-desc mt-4">
            Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end.
          </p>
        </div>

        {/* Agent illustration */}
        <div className="card-panel overflow-hidden">
          <div className="grain absolute inset-0" style={{ top: 1, left: 1, right: 1, zIndex: 3 }} />
          <div className="relative">
            {/* Agent header */}
            <div className="flex items-center justify-between border-b border-l-border px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-l-teal/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-l-teal" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM6 11.5c0-1.5 1-2.5 2-2.5s2 1 2 2.5H6z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Codex</span>
              </div>
              <svg className="w-4 h-4 text-l-text-quaternary" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="3" cy="8" r="1.5" />
                <circle cx="8" cy="8" r="1.5" />
                <circle cx="13" cy="8" r="1.5" />
              </svg>
            </div>

            {/* Agent output */}
            <div className="p-6 space-y-4">
              <div className="text-sm text-l-text-secondary">On it! I've received your request.</div>
              <div className="text-sm">
                <span className="text-l-text-secondary">Kicked off a task in </span>
                <span className="text-l-teal font-mono text-xs">kinetic/kinetic-iOS</span>
                <span className="text-l-text-secondary"> environment.</span>
              </div>
              <div className="text-sm text-l-text-secondary">Searching for root AGENTS file</div>
              <div className="rounded-md bg-l-bg p-3 font-mono text-xs text-l-text-quaternary border border-l-border">
                kinetic/kinetic-iOS$ /bin/bash -lc rg --files -g &apos;AGENTS.md&apos;<br />
                AGENTS.md
              </div>
              <div className="text-sm">
                <span className="text-l-text-secondary">Locating initialization logic for </span>
                <span className="text-l-teal font-mono text-xs">vehicle_state</span>
              </div>

              {/* Thinking indicator */}
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-5 gap-0.5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-l-text-quaternary/30 animate-pulse" style={{ animationDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <span className="text-xs text-l-text-quaternary">Thinking..</span>
              </div>

              {/* Summary */}
              <div className="mt-4 border-t border-l-border pt-4">
                <div className="text-xs text-l-text-quaternary mb-2">Summary</div>
                <p className="text-sm text-l-text-secondary max-w-md">
                  Replaced <code className="rounded bg-l-bg-tertiary px-1 py-0.5 text-xs font-mono text-l-teal">isFullySynced</code> with{' '}
                  <code className="rounded bg-l-bg-tertiary px-1 py-0.5 text-xs font-mono text-l-teal">syncStatus</code> and gated the loading indicator on{' '}
                  <code className="rounded bg-l-bg-tertiary px-1 py-0.5 text-xs font-mono text-l-teal">SyncStatus.PENDING</code>.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-l-text-quaternary">
                  <svg className="w-3.5 h-3.5 text-l-indigo" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z" />
                  </svg>
                  <span>Changed 1 file <span className="text-l-indigo">+2</span> -3</span>
                  <span className="ml-2">Merged</span>
                  <span className="text-l-text-secondary">codex/ENG-2703-render-sync-9214</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
