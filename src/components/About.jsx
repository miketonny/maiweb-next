import { useEffect, useRef, useState } from 'react';

export default function About({ data }) {
  const { overline, title, paragraphs } = data;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" style={{
      background: 'var(--color-bg-panel)', padding: '100px 32px',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div ref={ref} style={{
        maxWidth: 700, marginLeft: 'auto', marginRight: 'auto',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s ease',
      }}>
        <div className="overline">{overline}</div>
        <h2 className="section-title" style={{ marginBottom: 28 }}>{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} style={{
            fontSize: 16, color: 'var(--color-text-tertiary)',
            lineHeight: 1.8, marginBottom: i < paragraphs.length - 1 ? 20 : 0,
          }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
