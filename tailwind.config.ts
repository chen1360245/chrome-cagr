import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Financial Growth Green (Based on PRD 7.2)
        primary: {
          DEFAULT: '#00D395',
          dark: '#00A876',
          light: '#B3F5E6',
        },
        // Accent Colors
        accent: {
          blue: '#4F46E5',
          yellow: '#FBBF24',
          purple: '#8B5CF6',
          orange: '#F97316',
        },
        // Semantic Colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00D395 0%, #4F46E5 100%)',
        'gradient-result': 'linear-gradient(to right, #F3F4F6 0%, #E0E7FF 100%)',
        'gradient-button': 'linear-gradient(to right, #00D395, #00C489)',
        'gradient-hero': 'linear-gradient(180deg, rgba(0,211,149,0.05) 0%, rgba(255,255,255,0) 100%)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
    },
  },
  plugins: [],
}

export default config
