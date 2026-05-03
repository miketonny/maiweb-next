export default function Hero({ data }) {
  const { tagline, title, subtitle, cta_primary, cta_secondary } = data;

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '120px 32px 80px',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle ambient gradient */}
      <div style={{
        position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
        width: 900, height: 900, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(94,106,210,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(113,112,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, position: 'relative', zIndex: 1 }}>
        {/* Tagline badge */}
        <div style={{
          display: 'inline-block', background: 'rgba(94,106,210,0.12)',
          color: 'var(--color-accent-bright)', padding: '5px 14px',
          borderRadius: 9999, fontSize: 13, fontWeight: 500,
          marginBottom: 28, letterSpacing: '0.2px',
        }}>
          {tagline}
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 510, color: 'var(--color-text-primary)',
          lineHeight: 1.06, letterSpacing: '-0.025em',
          marginBottom: 20,
        }}>
          {title}
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 18px)',
          color: 'var(--color-text-tertiary)',
          maxWidth: 620, margin: '0 auto 44px',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollTo('#contact')}
            style={{
              background: 'var(--color-accent)', color: '#fff',
              border: 'none', borderRadius: 6, padding: '11px 26px',
              fontSize: 15, fontWeight: 500, cursor: 'pointer',
              fontFamily: 'inherit', transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.background = 'var(--color-accent-hover)'}
            onMouseLeave={(e) => e.target.style.background = 'var(--color-accent)'}
          >
            {cta_primary}
          </button>
          <button
            onClick={() => scrollTo('#portfolio')}
            style={{
              background: 'rgba(255,255,255,0.02)', color: 'var(--color-text-secondary)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6,
              padding: '11px 26px', fontSize: 15, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.05)';
              e.target.style.borderColor = 'rgba(255,255,255,0.14)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.02)';
              e.target.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
          >
            {cta_secondary}
          </button>
        </div>
      </div>
    </section>
  );
}
