import { useEffect, useRef, useState } from 'react';

export default function Portfolio({ data }) {
  const { overline, title, description, items } = data;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" style={{ padding: '100px 32px' }}>
      <div ref={ref} style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="overline">{overline}</div>
        <h2 className="section-title">{title}</h2>
        <p className="section-desc" style={{ marginBottom: 48 }}>{description}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 16,
        }}>
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              style={{
                display: 'block', background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8, padding: 28,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `all 0.5s ease ${i * 0.08}s, border-color 0.2s`,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
              }}
            >
              <span style={{
                fontSize: 12, fontWeight: 510, color: 'var(--color-text-quaternary)',
                textTransform: 'uppercase', letterSpacing: '1px',
                display: 'block', marginBottom: 10,
              }}>
                {item.category}
              </span>
              <h3 style={{
                fontSize: 18, fontWeight: 590, color: 'var(--color-text-primary)',
                marginBottom: 8,
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--color-text-tertiary)', lineHeight: 1.6 }}>
                {item.description}
              </p>
              <span style={{
                display: 'inline-block', marginTop: 14,
                fontSize: 13, fontWeight: 500, color: 'var(--color-accent-bright)',
              }}>
                View Project →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
