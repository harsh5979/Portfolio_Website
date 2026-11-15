/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        'surface-2': '#18181b',
        border: '#27272a',
        accent: {
          primary: '#0ea5e9',       // Clean, high-tech electric sky blue
          'primary-hover': '#0284c7',
          'primary-dim': '#0ea5e918',
          secondary: '#38bdf8',     // Crisp ice blue
          'secondary-dim': '#38bdf818',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          // Backward-compatible aliases
          purple: '#0ea5e9',
          'purple-dim': '#0ea5e918',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-primary': 'radial-gradient(ellipse at top left, #0ea5e918 0%, transparent 60%)',
        'glow-secondary': 'radial-gradient(ellipse at bottom right, #38bdf812 0%, transparent 60%)',
        'glow-purple': 'radial-gradient(ellipse at top left, #0ea5e918 0%, transparent 60%)',
        'glow-blue': 'radial-gradient(ellipse at bottom right, #38bdf812 0%, transparent 60%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
