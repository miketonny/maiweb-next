import { ServiceIcon } from './Icons';
import { useEffect, useRef, useState } from 'react';

export default function Services({ data }) {
  const { overline, title, description, items } = data;
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
    <section id="services" style={{ padding: '100px 32px' }}>
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
            <div key={i} style={{
              background: 'rgba(255,255,255,0.015)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 8, padding: 28,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.5s ease ${i * 0.08}s`,
            }}>
              <div style={{ marginBottom: 14 }}>
                <ServiceIcon name={item.icon} size={24} color="var(--color-accent-bright)" />
              </div>
              <h3 style={{
                fontSize: 17, fontWeight: 590, color: 'var(--color-text-primary)',
                marginBottom: 8,
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--color-text-tertiary)', lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
