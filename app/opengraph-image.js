import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pepino AI — Business Plan'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  // Seed positions for cucumber (11 seeds on orbit)
  const seeds = Array.from({ length: 11 }, (_, i) => {
    const angle = (i / 11) * 2 * Math.PI - Math.PI / 2
    const cx = 60 + Math.cos(angle) * 27.6
    const cy = 60 + Math.sin(angle) * 27.6
    return { cx, cy }
  })

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0B0E0C',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Green radial glow */}
        <div style={{
          position: 'absolute',
          right: -100,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(160,255,121,0.18) 0%, transparent 65%)',
          display: 'flex',
        }} />

        {/* Cucumber logo SVG */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ marginBottom: 32 }}>
          <circle cx="60" cy="60" r="55.2" fill="#A0FF79" />
          <circle cx="60" cy="60" r="47.8" fill="#0B0E0C" />
          <circle cx="60" cy="60" r="43.2" fill="#A0FF79" />
          {seeds.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r="4.2" fill="#0B0E0C" />
          ))}
          <circle cx="60" cy="60" r="8.4" fill="#0B0E0C" />
        </svg>

        {/* Brand name */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 8,
          marginBottom: 16,
        }}>
          <span style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#F4F7F2',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}>Pepino</span>
          <span style={{
            fontSize: 32,
            fontWeight: 800,
            color: '#A0FF79',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: 24,
          }}>AI</span>
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 28,
          fontWeight: 500,
          color: '#7E8C7C',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: 40,
        }}>Business Plan · 2026</div>

        {/* Tagline */}
        <div style={{
          fontSize: 22,
          fontWeight: 400,
          color: '#B6C4B2',
          lineHeight: 1.5,
          maxWidth: 560,
        }}>
          AI agents for every business, via WhatsApp.
        </div>

        {/* Bottom pill */}
        <div style={{
          position: 'absolute',
          bottom: 60,
          left: 96,
          display: 'flex',
          gap: 12,
        }}>
          {['SaaS', 'WhatsApp', 'LATAM + España'].map((tag, i) => (
            <div key={i} style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#A0FF79',
              background: 'rgba(160,255,121,0.1)',
              border: '1px solid rgba(160,255,121,0.3)',
              borderRadius: 6,
              padding: '6px 14px',
            }}>{tag}</div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
