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
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        background: '#f5f3ed',
        surface: '#fffdf8',
        'surface-2': '#eaece2',
        border: '#cfd5c9',
        accent: {
          primary: '#327957',       // Clean, high-tech electric sky blue
          'primary-hover': '#286146',
          'primary-dim': '#32795718',
          secondary: '#53866d',     // Crisp ice blue
          'secondary-dim': '#53866d18',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          emerald: '#10b981',       // Clean emerald status accent
          'emerald-dim': '#10b98118',
        },
        text: {
          primary: '#202b26',
          secondary: '#42564b',
          muted: '#52645a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-primary': 'radial-gradient(ellipse at top left, #32795718 0%, transparent 60%)',
        'glow-secondary': 'radial-gradient(ellipse at bottom right, #53866d12 0%, transparent 60%)',
        'glow-blue': 'radial-gradient(ellipse at bottom right, #53866d12 0%, transparent 60%)',
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
      boxShadow: {
        'glow-sky': '0 0 30px -5px rgba(14, 165, 233, 0.25)',
        'glow-subtle': '0 0 20px -3px rgba(14, 165, 233, 0.12)',
        'surface-card': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 8px 24px -4px rgba(0, 0, 0, 0.6)',
        'surface-elevated': '0 0 0 1px rgba(255, 255, 255, 0.08), 0 20px 40px -8px rgba(0, 0, 0, 0.8)',
        'terminal-window': '0 0 0 1px rgba(255, 255, 255, 0.08), 0 24px 50px -12px rgba(0, 0, 0, 0.9), 0 0 45px -10px rgba(14, 165, 233, 0.15)',
      },
    },
  },
  plugins: [],
}
