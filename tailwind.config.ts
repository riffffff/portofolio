import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        surface: '#0a0a0a',
        border: '#1a1a1a',
        primary: '#6366f1',
        text: '#ffffff',
        muted: '#94a3b8',
        chip: '#18181b',
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.18)'
      }
    },
  },
  plugins: [],
} satisfies Config