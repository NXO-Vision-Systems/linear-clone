export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] max-w-4xl">
          <span className="block">The product development</span>
          <span className="block">system for teams <span className="text-l-text-tertiary">and agents</span></span>
        </h1>

        {/* Subtitle */}
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="text-lg text-l-text-secondary max-w-lg">
            Purpose-built for planning and building products. Designed for the AI era.
          </p>
          <a
            href="/next"
            className="group flex items-center gap-3 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-l-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-l-green" />
            </span>
            <span className="text-l-text-secondary group-hover:text-l-text transition-colors">
              Issue tracking is dead
            </span>
            <span className="text-l-text-tertiary">linear.app/next →</span>
          </a>
        </div>

        {/* Hero Image */}
        <div className="mt-12 md:mt-16">
          <div className="card-panel overflow-hidden">
            <div className="grain absolute inset-0" />
            <div className="glow absolute inset-0" />
            <div className="relative aspect-[16/10] w-full bg-l-bg-tertiary flex items-center justify-center">
              {/* App preview mockup */}
              <div className="flex h-full w-full">
                {/* Sidebar */}
                <div className="hidden w-56 border-r border-l-border bg-l-bg-secondary p-4 md:block">
                  <div className="flex items-center gap-2 mb-6">
                    <svg width="13" height="13" viewBox="0 0 100 100" fill="#E2E4E6">
                      <path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" />
                    </svg>
                    <span className="text-sm font-medium text-l-text">Linear</span>
                  </div>
                  {/* Nav items */}
                  <div className="space-y-1">
                    {['Inbox', 'My issues', 'Reviews', 'Pulse'].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-l-text-secondary hover:bg-l-bg-tertiary">
                        <div className="h-3.5 w-3.5 rounded bg-l-text-quaternary/30" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-l-border pt-4">
                    <div className="text-[10px] uppercase tracking-wider text-l-text-quaternary mb-2">Workspace</div>
                    {['Initiatives', 'Projects', 'More'].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-l-text-secondary">
                        <div className="h-3.5 w-3.5 rounded bg-l-text-quaternary/30" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Main content */}
                <div className="flex-1 p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-medium">Faster app launch</span>
                    <span className="ml-auto text-xs text-l-text-quaternary">02 / 145</span>
                  </div>
                  <p className="text-sm text-l-text-secondary max-w-md mb-6">
                    Render UI before <code className="rounded bg-l-bg-tertiary px-1.5 py-0.5 text-xs font-mono">vehicle_state</code> sync when minimum required state is present, instead of blocking on full refresh during iOS startup.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-l-text-secondary">
                      <div className="h-3 w-3 rounded-full bg-l-yellow" />
                      <span>In Progress</span>
                      <span className="ml-2 rounded bg-l-green/10 px-1.5 py-0.5 text-[10px] text-l-green">Performance</span>
                      <span className="rounded bg-l-yellow/10 px-1.5 py-0.5 text-[10px] text-l-yellow">iOS</span>
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
