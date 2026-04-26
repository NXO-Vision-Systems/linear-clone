import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Linear – The system for product development',
  description: 'Purpose-built for planning and building products with AI agents.',
  openGraph: {
    title: 'Linear – The system for product development',
    description: 'Purpose-built for planning and building products with AI agents.',
    images: ['/images/og-homepage.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@linear',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#08090a] text-[#e8e8ec] antialiased">
        {children}
      </body>
    </html>
  )
}
