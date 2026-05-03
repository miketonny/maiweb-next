// Linear-style minimal SVG icons — monochrome, thin strokes, geometric
// All icons use currentColor for theme integration

export function IconBrain() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Brain — AI / consulting */}
      <path d="M12 4a2.5 2.5 0 0 0-2.5 2.5c0 1 .6 1.8 1.5 2.2V10H7.5C6.1 10 5 11.1 5 12.5S6.1 15 7.5 15H9v-1" />
      <path d="M12 4a2.5 2.5 0 0 1 2.5 2.5c0 1-.6 1.8-1.5 2.2V10H16.5c1.4 0 2.5 1.1 2.5 2.5S17.9 15 16.5 15H15" />
      <circle cx="12" cy="18" r="2" />
      <path d="M8 20h8" />
    </svg>
  );
}

export function IconArchitecture() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Architecture — nodes / system */}
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M6 8v8M8 6h8M18 8v8M16 18H8M12 10v4" />
    </svg>
  );
}

export function IconWeb() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Web development — browser/code */}
      <rect x="2" y="3" width="20" height="16" rx="2" />
      <path d="M2 8h20" />
      <circle cx="6" cy="6" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="6" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="11" cy="6" r="0.5" fill="currentColor" stroke="none" />
      <path d="M7 13l-2 2 2 2M13 13l2 2-2 2M10 12l-1 6" />
    </svg>
  );
}

export function IconAnalysis() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Business analysis — chart/growth */}
      <path d="M3 3v18h18" />
      <path d="M7 16l4-6 4 3 4-7" />
    </svg>
  );
}

export function IconMigration() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Legacy modernization — refresh/transform */}
      <path d="M1 4v6h6" />
      <path d="M3.5 15a9 9 0 1 0 2.1-9.4L1 10" />
    </svg>
  );
}

export function IconAgent() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* AI Agent — bot/automation */}
      <rect x="3" y="4" width="18" height="14" rx="3" />
      <circle cx="8.5" cy="11" r="1" fill="currentColor" />
      <circle cx="15.5" cy="11" r="1" fill="currentColor" />
      <path d="M9 15h6" />
      <path d="M12 18v2" />
      <path d="M9 20h6" />
    </svg>
  );
}

export function IconEnvelope() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4l-10 8L2 4" />
    </svg>
  );
}

// Service icon mapping
const iconMap = {
  brain: IconBrain,
  architecture: IconArchitecture,
  web: IconWeb,
  analysis: IconAnalysis,
  migration: IconMigration,
  agent: IconAgent,
};

export function ServiceIcon({ name, size = 24, color = 'var(--color-accent-bright)' }) {
  const Component = iconMap[name];
  if (!Component) return null;
  return (
    <span style={{ color, display: 'inline-flex', alignItems: 'center' }}>
      <Component />
    </span>
  );
}
