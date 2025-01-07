export const banner = {
  position: 'absolute',
  top: '-200px',
  left: '0',
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
} as const;

export const bannerContainer = {
  width: '100%',
  height: '300px',
  overflow: 'hidden',
  position: 'relative',
} as const;

export const textContainer = {
  position: 'absolute',
  top: '50%',
  left: '10%',
  transform: 'translateY(-50%)',
  color: '#fff',
} as const;

export const title = { fontSize: '3rem', fontWeight: 'bold', color: 'black' } as const;

export const titleDiscount = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#ff0000',
  padding: '10px 15px',
  borderRadius: '5px',
  display: 'inline-block',
} as const;
