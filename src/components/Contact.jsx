import { useEffect, useRef, useState } from 'react';

export default function Contact({ data }) {
  const { overline, title, description, email, location } = data;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" style={{
      background: 'var(--color-bg-panel)', padding: '100px 32px',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      textAlign: 'center',
    }}>
      <div ref={ref} style={{
        maxWidth: 560, marginLeft: 'auto', marginRight: 'auto',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.7s ease',
      }}>
        <div className="overline">{overline}</div>
        <h2 className="section-title">{title}</h2>
        <p className="section-desc" style={{ margin: '0 auto 40px' }}>{description}</p>

        {/* Contact Details */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 16,
          marginBottom: 36,
        }}>
          <a href={`mailto:${email}`} style={{
            fontSize: 20, fontWeight: 500, color: 'var(--color-accent-bright)',
            textDecoration: 'none',
          }}>
            {email}
          </a>
          <div style={{ fontSize: 15, color: 'var(--color-text-tertiary)' }}>
            {location}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={`mailto:${email}`}
          style={{
            display: 'inline-block', background: 'var(--color-accent)',
            color: '#fff', border: 'none', borderRadius: 6,
            padding: '12px 32px', fontSize: 16, fontWeight: 500,
            cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.background = 'var(--color-accent-hover)'}
          onMouseLeave={(e) => e.target.style.background = 'var(--color-accent)'}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
