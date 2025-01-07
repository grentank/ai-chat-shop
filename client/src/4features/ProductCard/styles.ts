export const onMouseEnter: React.MouseEventHandler<HTMLElement> = (e) => {
  e.currentTarget.style.transform = 'translateY(-5px)';
  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
};

export const onMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = 'none';
};

export const card = {
  width: '15rem',
  border: 'none',
  backgroundColor: '#f5f5f5',
  padding: 1,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
} as const;

export const imgContainer = {
  width: '100%',
  height: '200px',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const;

export const cardImg = { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' } as const;

export const fullPrice = {
  color: 'gray',
  textDecoration: 'line-through',
  marginLeft: '10px',
  fontSize: '0.7rem',
} as const;

export const discount = {
  color: 'red',
  marginLeft: '10px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
} as const;
