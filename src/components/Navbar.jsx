import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      background: scrolled ? 'rgba(15,16,17,0.94)' : 'rgba(8,9,10,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto',
        padding: '0 32px', height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 18, fontWeight: 600, color: 'var(--color-text-primary)',
            letterSpacing: '-0.4px', fontFamily: 'inherit',
          }}
        >
          Maiweb
        </button>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <ul style={{
            display: 'flex', gap: 24, listStyle: 'none', alignItems: 'center',
          }} className="desktop-nav">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 14, fontWeight: 500, color: 'var(--color-text-secondary)',
                    fontFamily: 'inherit', transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-text-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleClick('#contact')}
            style={{
              background: 'var(--color-accent)', color: '#fff',
              border: 'none', borderRadius: 6, padding: '7px 18px',
              fontSize: 14, fontWeight: 500, cursor: 'pointer',
              fontFamily: 'inherit', marginLeft: 16,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.background = 'var(--color-accent-hover)'}
            onMouseLeave={(e) => e.target.style.background = 'var(--color-accent)'}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none', background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%',
            width: 36, height: 36, alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--color-text-secondary)', fontSize: 18,
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: '#0f1011', borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '12px 32px 20px',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'none', border: 'none',
                    cursor: 'pointer', fontSize: 15, fontWeight: 500,
                    color: 'var(--color-text-secondary)', padding: '10px 0',
                    fontFamily: 'inherit',
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
