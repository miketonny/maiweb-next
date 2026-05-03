export default function Footer({ data }) {
  const { copyright, location } = data;

  return (
    <footer style={{
      padding: '40px 32px', textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <p style={{ fontSize: 13, color: 'var(--color-text-quaternary)' }}>
        {copyright} · {location}
      </p>
    </footer>
  );
}
