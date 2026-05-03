import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 99,
        width: 42, height: 42, borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        color: 'var(--color-text-secondary)',
        border: '1px solid rgba(255,255,255,0.08)',
        cursor: 'pointer', fontSize: 18,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(255,255,255,0.1)';
        e.target.style.color = 'var(--color-text-primary)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'rgba(255,255,255,0.06)';
        e.target.style.color = 'var(--color-text-secondary)';
      }}
    >
      ↑
    </button>
  );
}
