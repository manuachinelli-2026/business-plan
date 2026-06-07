import './globals.css'

export const metadata = {
  title: 'Pepino AI — Business Plan',
  description: 'Pepino AI: AI agents for every business, via WhatsApp.',
  openGraph: {
    title: 'Pepino AI — Business Plan',
    description: 'AI agents for every business, via WhatsApp.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pepino AI — Business Plan',
    description: 'AI agents for every business, via WhatsApp.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
