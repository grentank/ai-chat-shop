export const onMouseEnter: React.MouseEventHandler<HTMLElement> = (e) => {
  e.currentTarget.style.transform = 'translateY(-8px)';
  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.6)';
  e.currentTarget.style.borderColor = '#3a3a3a';

  // Show overlay on hover
  const overlay = e.currentTarget.querySelector('[data-overlay]') as HTMLElement;
  if (overlay) {
    overlay.style.opacity = '1';
  }
};

export const onMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
  e.currentTarget.style.borderColor = '#2a2a2a';

  // Hide overlay
  const overlay = e.currentTarget.querySelector('[data-overlay]') as HTMLElement;
  if (overlay) {
    overlay.style.opacity = '0';
  }
};

export const card = {
  width: '17rem',
  border: '1px solid #2a2a2a',
  backgroundColor: '#1e1e1e',
  padding: 0,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  borderRadius: '0',
  overflow: 'hidden',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
} as const;

export const imgContainer = {
  width: '100%',
  height: '280px',
  backgroundColor: '#141414',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
} as const;

export const cardImg = {
  maxWidth: '90%',
  maxHeight: '90%',
  objectFit: 'contain',
  transition: 'transform 0.3s ease',
} as const;

export const imageOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
} as const;

export const viewDetails = {
  color: '#d4af37',
  fontSize: '0.9rem',
  fontWeight: '400',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  padding: '10px 24px',
  border: '1px solid #d4af37',
} as const;

export const cardBody = {
  padding: '1.5rem',
  backgroundColor: '#1e1e1e',
} as const;

export const productName = {
  color: '#b3b3b3',
  fontSize: '0.95rem',
  fontWeight: '300',
  marginBottom: '1rem',
  minHeight: '2.5rem',
  lineHeight: '1.3',
} as const;

export const priceContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
} as const;

export const priceRow = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
} as const;

export const currentPrice = {
  color: '#ffffff',
  fontSize: '1.4rem',
  fontWeight: '300',
  letterSpacing: '1px',
} as const;

export const fullPrice = {
  color: '#666666',
  textDecoration: 'line-through',
  fontSize: '0.85rem',
  fontWeight: '300',
} as const;

export const discount = {
  color: '#ff4444',
  fontSize: '0.85rem',
  fontWeight: '500',
  letterSpacing: '1px',
  padding: '4px 8px',
  backgroundColor: 'rgba(255, 68, 68, 0.15)',
  borderRadius: '2px',
} as const;
