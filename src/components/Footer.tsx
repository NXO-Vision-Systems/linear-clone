const footerSections = [
  {
    title: 'Product',
    links: ['Intake', 'Plan', 'Build', 'Diffs', 'Monitor', 'Pricing', 'Security'],
  },
  {
    title: 'Features',
    links: ['Asks', 'Agents', 'Customer Requests', 'Insights', 'Mobile', 'Integrations', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Customers', 'Careers', 'Blog', 'Method', 'Quality', 'Brand'],
  },
  {
    title: 'Resources',
    links: ['Switch', 'Download', 'Documentation', 'Developers', 'Status', 'Enterprise', 'Startups'],
  },
  {
    title: 'Connect',
    links: ['Contact us', 'Community', 'X (Twitter)', 'GitHub', 'YouTube'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-l-border">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block">
              <svg height="20" viewBox="0 0 400 100" fill="currentColor" className="text-l-text-secondary">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.9266 16.3713c-.5283.5806-.4933 1.4714.0617 2.0265l68.5946 68.5946c.5551.555 1.4459.59 2.0265.0617 10.0579-9.1522 16.3713-22.3478 16.3713-37.0179C99.9807 22.402 77.5788 0 49.9445 0 35.2744 0 22.0788 6.31337 12.9266 16.3713Z" />
              </svg>
            </a>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-medium text-l-text-secondary mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-xs text-l-text-quaternary hover:text-l-text-secondary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-l-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 text-xs text-l-text-quaternary">
            <a href="/privacy" className="hover:text-l-text-secondary transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-l-text-secondary transition-colors">Terms</a>
            <a href="/dpa" className="hover:text-l-text-secondary transition-colors">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
