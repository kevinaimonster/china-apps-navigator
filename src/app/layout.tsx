import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/config/site.config'

export const metadata: Metadata = siteConfig.metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gradient-to-b from-blue-50 to-white">
        {children}
      </body>
    </html>
  )
}
