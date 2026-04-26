export default function ReviewSection() {
  return (
    <section className="py-16 md:py-24 border-t border-l-border/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-xs text-l-text-quaternary font-mono">4.0</span>
            <a href="/diffs" className="text-sm text-l-text-secondary hover:text-l-text transition-colors">
              {"Diffs (Coming soon) →"}
            </a>
          </div>
          <h2 className="section-title max-w-sm">{"Review PRs and agent output"}</h2>
          <p className="section-desc mt-4">
            Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all within Linear.
          </p>
        </div>

        {/* Code diff illustration */}
        <div className="card-panel overflow-hidden">
          <div className="grain absolute inset-0" style={{ inset: 1 }} />
          <div className="relative">
            {/* File header */}
            <div className="flex items-center gap-2 border-b border-l-border px-4 py-2">
              <svg className="w-4 h-4 text-l-text-quaternary" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.212.413a2.5 2.5 0 0 1 1.52.72l3.536 3.534A2.5 2.5 0 0 1 14 6.435V11.9l-.013.256a2.5 2.5 0 0 1-2.231 2.231l-.256.013h-7l-.256-.013a2.5 2.5 0 0 1-2.231-2.231L2 11.9v-9A2.5 2.5 0 0 1 4.244.413L4.5.4h3.465z" />
              </svg>
              <span className="text-xs text-l-text-secondary font-mono">
                {"kinetic-ios/src/screens/Home/HomeScreen.tsx"}
              </span>
            </div>

            {/* Code diff */}
            <div className="grid md:grid-cols-2 divide-x divide-l-border">
              {/* Left - old */}
              <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-l-purple">import</span>{" "}
                  <span className="text-l-text-secondary">React from </span>
                  <span className="text-l-orange">{"'react'"}</span>
                </div>
                <div>
                  <span className="text-l-purple">import</span>{" "}
                  <span className="text-l-text-secondary">{"{ View, ActivityIndicator }"} from </span>
                  <span className="text-l-orange">{"'react-native'"}</span>
                </div>
                <div className="bg-l-red/10 -mx-4 px-4">
                  <span className="text-l-purple">import</span>{" "}
                  <span className="text-l-text-secondary">{"{ useVehicleState }"} from </span>
                  <span className="text-l-orange">{"'@hooks/useVehicleState'"}</span>
                </div>
                <div>
                  <span className="text-l-purple">import</span>{" "}
                  <span className="text-l-text-secondary">{"{ Dashboard }"} from </span>
                  <span className="text-l-orange">{"'@components/Dashboard'"}</span>
                </div>
                <div className="mt-2">
                  <span className="text-l-purple">export const</span>{" "}
                  <span className="text-l-green">HomeScreen</span>{" "}
                  <span className="text-l-text-secondary">{"= () => {"}</span>
                </div>
                <div className="bg-l-red/10 -mx-4 px-4">
                  {"  "}
                  <span className="text-l-purple">const</span>{" "}
                  <span className="text-l-text-secondary">{"{ vehicleState, "}</span>
                  <span className="line-through text-l-red">isFullySynced</span>
                  <span className="text-l-text-secondary">{" } = "}</span>
                  <span className="text-l-green">useVehicleState</span>
                  <span className="text-l-text-secondary">{"()"}</span>
                </div>
                <div className="bg-l-red/10 -mx-4 px-4">
                  {"  "}
                  <span className="text-l-purple">if</span>{" "}
                  <span className="text-l-text-secondary">{"(!"}</span>
                  <span className="line-through text-l-red">isFullySynced</span>
                  <span className="text-l-text-secondary">{") {"}</span>
                </div>
                <div>
                  {"    "}
                  <span className="text-l-purple">return</span>{" "}
                  <span className="text-l-text-secondary">{"<ActivityIndicator size=\"large\" />"}</span>
                </div>
                <div>
                  {"  "}
                  <span className="text-l-text-secondary">{"}"}</span>
                </div>
                <div className="bg-l-red/10 -mx-4 px-4">
                  {"      <Dashboard state={vehicleState} />"}
                </div>
                <div>
                  <span className="text-l-text-secondary">{"}"}</span>
                </div>
              </div>

              {/* Right - new */}
              <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-l-purple">import</span>{" "}
                  <span className="text-l-text-secondary">React from </span>
                  <span className="text-l-orange">{"'react'"}</span>
                </div>
                <div>
                  <span className="text-l-purple">import</span>{" "}
                  <span className="text-l-text-secondary">{"{ View, ActivityIndicator }"} from </span>
                  <span className="text-l-orange">{"'react-native'"}</span>
                </div>
                <div className="bg-l-green/10 -mx-4 px-4">
                  <span className="text-l-purple">import</span>{" "}
                  <span className="text-l-text-secondary">{"{ useVehicleState, "}</span>
                  <span className="text-l-green">SyncStatus</span>
                  <span className="text-l-text-secondary">{" }"} from </span>
                  <span className="text-l-orange">{"'@hooks/useVehicleState'"}</span>
                </div>
                <div>
                  <span className="text-l-purple">import</span>{" "}
                  <span className="text-l-text-secondary">{"{ Dashboard }"} from </span>
                  <span className="text-l-orange">{"'@components/Dashboard'"}</span>
                </div>
                <div className="mt-2">
                  <span className="text-l-purple">export const</span>{" "}
                  <span className="text-l-green">HomeScreen</span>{" "}
                  <span className="text-l-text-secondary">{"= () => {"}</span>
                </div>
                <div className="bg-l-green/10 -mx-4 px-4">
                  {"  "}
                  <span className="text-l-purple">const</span>{" "}
                  <span className="text-l-text-secondary">{"{ vehicleState, "}</span>
                  <span className="text-l-green">syncStatus</span>
                  <span className="text-l-text-secondary">{" } = "}</span>
                  <span className="text-l-green">useVehicleState</span>
                  <span className="text-l-text-secondary">{"()"}</span>
                </div>
                <div className="bg-l-green/10 -mx-4 px-4">
                  {"  "}
                  <span className="text-l-purple">if</span>{" "}
                  <span className="text-l-text-secondary">{"(syncStatus === SyncStatus.PENDING) {"}</span>
                </div>
                <div>
                  {"    "}
                  <span className="text-l-purple">return</span>{" "}
                  <span className="text-l-text-secondary">{"<ActivityIndicator size=\"large\" />"}</span>
                </div>
                <div>
                  {"  "}
                  <span className="text-l-text-secondary">{"}"}</span>
                </div>
                <div className="bg-l-green/10 -mx-4 px-4">
                  {"      <Dashboard state={vehicleState} syncStatus={syncStatus} />"}
                </div>
                <div>
                  <span className="text-l-text-secondary">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
