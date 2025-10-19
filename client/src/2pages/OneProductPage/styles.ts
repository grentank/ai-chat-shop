// Image Section
export const imageCol = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
} as const;

export const imageContainer = {
  width: '100%',
  maxWidth: '500px',
  height: '500px',
  backgroundColor: '#141414',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #2a2a2a',
  padding: '2rem',
} as const;

export const prodImg = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
} as const;

// Details Section
export const detailsCol = {
  padding: '0 2rem',
} as const;

export const productTitle = {
  fontSize: '2rem',
  fontWeight: '300',
  color: '#ffffff',
  marginBottom: '2rem',
  letterSpacing: '1px',
} as const;

export const priceSection = {
  marginBottom: '2rem',
  padding: '1.5rem',
  backgroundColor: '#1e1e1e',
  border: '1px solid #2a2a2a',
} as const;

export const priceMain = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',
} as const;

export const currentPrice = {
  fontSize: '2.5rem',
  fontWeight: '300',
  color: '#d4af37',
  letterSpacing: '1px',
} as const;

export const highPrice = {
  color: '#666666',
  textDecoration: 'line-through',
  fontSize: '1.1rem',
  fontWeight: '300',
} as const;

export const discountAmount = {
  color: '#ff4444',
  fontSize: '1rem',
  fontWeight: '500',
  letterSpacing: '1px',
  padding: '6px 12px',
  backgroundColor: 'rgba(255, 68, 68, 0.15)',
  borderRadius: '2px',
} as const;

export const buyButton = {
  marginTop: '1rem',
  width: '100%',
  height: '60px',
  fontSize: '1.1rem',
  fontWeight: '400',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  backgroundColor: '#d4af37',
  borderColor: '#d4af37',
  color: '#000000',
  transition: 'all 0.3s ease',
} as const;

export const descriptionSection = {
  marginTop: '3rem',
} as const;

export const sectionTitle = {
  fontSize: '1.5rem',
  fontWeight: '300',
  letterSpacing: '3px',
  color: '#ffffff',
  textTransform: 'uppercase',
  marginBottom: '1rem',
} as const;

export const divider = {
  width: '60px',
  height: '1px',
  background: '#d4af37',
  marginBottom: '1.5rem',
} as const;

export const description = {
  color: '#b3b3b3',
  fontSize: '1rem',
  lineHeight: '1.8',
  fontWeight: '300',
} as const;

// Comments Section
export const commentsSection = {
  marginTop: '60px',
  paddingTop: '40px',
  borderTop: '1px solid #2a2a2a',
} as const;

export const commentForm = {
  marginTop: '2rem',
  padding: '2rem',
  backgroundColor: '#1e1e1e',
  border: '1px solid #2a2a2a',
} as const;

export const formLabel = {
  fontSize: '1rem',
  fontWeight: '300',
  letterSpacing: '1px',
  color: '#b3b3b3',
  marginBottom: '1rem',
} as const;

export const textarea = {
  backgroundColor: '#141414',
  border: '1px solid #2a2a2a',
  color: '#ffffff',
  fontSize: '0.95rem',
  padding: '1rem',
  minHeight: '120px',
  resize: 'vertical',
} as const;

export const submitButton = {
  backgroundColor: '#d4af37',
  borderColor: '#d4af37',
  color: '#000000',
  fontWeight: '400',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  padding: '10px 32px',
} as const;

export const noComments = {
  fontStyle: 'italic',
  color: '#666666',
  textAlign: 'center',
  padding: '3rem 0',
  fontSize: '1rem',
} as const;

export const commentsList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
} as const;

export const commentCard = {
  padding: '1.5rem',
  backgroundColor: '#1e1e1e',
  border: '1px solid #2a2a2a',
  transition: 'border-color 0.3s ease',
} as const;

export const commentHeader = {
  marginBottom: '1rem',
  paddingBottom: '0.75rem',
  borderBottom: '1px solid #2a2a2a',
} as const;

export const commentAuthor = {
  fontSize: '1rem',
  fontWeight: '400',
  color: '#d4af37',
  letterSpacing: '1px',
  margin: 0,
} as const;

export const commentBody = {
  color: '#b3b3b3',
  fontSize: '0.95rem',
  lineHeight: '1.7',
  margin: 0,
} as const;
