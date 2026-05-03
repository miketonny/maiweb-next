import { useEffect, useRef, useState } from 'react';

export default function Stack({ data }) {
  const { overline, title, categories } = data;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" style={{
      background: 'var(--color-bg-panel)', padding: '100px 32px',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div ref={ref} style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="overline" style={{ textAlign: 'center' }}>{overline}</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 48 }}>{title}</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {categories.map((cat, i) => (
            <div key={i} style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}>
              <h3 style={{
                fontSize: 13, fontWeight: 510, color: 'var(--color-text-quaternary)',
                textTransform: 'uppercase', letterSpacing: '1px',
                marginBottom: 14, paddingLeft: 4,
              }}>
                {cat.name}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.items.map((item, j) => (
                  <span key={j} style={{
                    background: 'rgba(255,255,255,0.03)',
                    color: 'var(--color-text-secondary)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 6, padding: '6px 14px',
                    fontSize: 13, fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
