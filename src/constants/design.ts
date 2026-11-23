// Deep maroon design system tokens

export const COLORS = {
  accent: {
    maroon: '#830000',
    maroonHover: '#660000',
    maroonLight: 'rgba(131, 0, 0, 0.15)',
    soft: '#C99199',
    dark: '#660000',
    tint: '#F1DADD',
  },
  background: {
    base: '#171719',
    surface: '#202022',
    card: '#272528',
    cardHover: '#30282A',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#ECEAEC',
    muted: '#A9A5A7',
    dim: '#858184',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.08)',
    medium: 'rgba(255, 255, 255, 0.14)',
    accent: 'rgba(131, 0, 0, 0.25)',
  },
} as const;

export const BORDER_RADIUS = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  '2xl': '2rem',
  full: '9999px',
} as const;

export const TRANSITIONS = {
  fast: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;
