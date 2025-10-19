export const bannerContainer = {
  width: '100%',
  height: '400px',
  overflow: 'hidden',
  position: 'relative',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
  borderRadius: '0',
  marginTop: '2rem',
  marginBottom: '3rem',
} as const;

export const bannerOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
  pointerEvents: 'none',
} as const;

export const bannerContent = {
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem',
  textAlign: 'center',
  zIndex: 1,
} as const;

export const brandSection = {
  marginBottom: '2rem',
} as const;

export const mainTitle = {
  fontSize: '5rem',
  fontWeight: '100',
  letterSpacing: '16px',
  color: '#d4af37',
  textTransform: 'uppercase',
  marginBottom: '1rem',
  textShadow: '0 0 40px rgba(212, 175, 55, 0.5)',
  lineHeight: '1.2',
} as const;

export const tagline = {
  fontSize: '1.1rem',
  fontWeight: '300',
  letterSpacing: '3px',
  color: '#b3b3b3',
  textTransform: 'uppercase',
  margin: 0,
} as const;

export const collectionBadge = {
  padding: '12px 32px',
  border: '1px solid #d4af37',
  borderRadius: '0',
  background: 'rgba(212, 175, 55, 0.05)',
} as const;

export const badgeText = {
  fontSize: '0.85rem',
  fontWeight: '400',
  letterSpacing: '2px',
  color: '#d4af37',
  textTransform: 'uppercase',
} as const;

export const sectionTitle = {
  fontSize: '1.8rem',
  fontWeight: '300',
  letterSpacing: '4px',
  color: '#ffffff',
  textTransform: 'uppercase',
  marginBottom: '1rem',
} as const;

export const divider = {
  width: '60px',
  height: '1px',
  background: '#d4af37',
  marginTop: '0.5rem',
} as const;
