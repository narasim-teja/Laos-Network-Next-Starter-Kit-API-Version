import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laos Network Starter Kit',
  description: 'A complete starter kit for building NFT applications on Laos Network',
  icons: {
    icon: '/Laos_Logo.png',
    apple: '/Laos_Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
