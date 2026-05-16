// Design System Constants for Portfolio

export const COLORS = {
  primary: {
    main: '#6366F1', // indigo-500
    light: '#818CF8', // indigo-400
    dark: '#4F46E5', // indigo-600
  },
  accent: {
    rose: '#F43F5E',
    sky: '#0EA5E9',
    emerald: '#10B981',
    amber: '#F59E0B',
    violet: '#8B5CF6',
  },
  background: '#0F172A',
  surface: 'rgba(255, 255, 255, 0.05)',
  surfaceHover: 'rgba(255, 255, 255, 0.08)',
  text: {
    primary: '#FFFFFF',
    secondary: '#E2E8F0',
    tertiary: '#94A3B8',
    muted: '#64748B',
  },
  border: 'rgba(255, 255, 255, 0.1)',
} as const;

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
  '4xl': '4rem',
} as const;

export const BORDER_RADIUS = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
  full: '9999px',
} as const;

export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  glass: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.1)',
} as const;

export const ANIMATIONS = {
  duration: {
    fast: 200,
    base: 300,
    slow: 500,
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const TRANSITIONS = {
  fast: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const GLASS_EFFECT = 'backdrop-blur-md bg-white/5 border border-white/10';
export const GLASS_EFFECT_HOVER = 'backdrop-blur-md bg-white/8 border border-white/10';
