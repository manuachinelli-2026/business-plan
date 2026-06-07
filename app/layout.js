import './globals.css'

export const metadata = {
  title: 'Pepino AI — Business Plan',
  description: 'Pepino AI: AI agents for every business, via WhatsApp.',
  openGraph: {
    title: 'Pepino AI — Business Plan',
    description: 'AI agents for every business, via WhatsApp.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
