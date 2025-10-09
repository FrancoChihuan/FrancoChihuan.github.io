/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Poppins'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          50: '#e0ecff',
          100: '#c0d9ff',
          200: '#8fb8ff',
          300: '#5f96ff',
          400: '#3578ff',
          500: '#1d5fff',
          600: '#1849d6',
          700: '#1537a6',
          800: '#10287a',
          900: '#0b1c55',
          950: '#050b26',
        },
        accent: '#fbbf24',
        dark: '#050b1a',
        light: '#020617',
        surface: '#0b1225',
        surfaceElevated: '#121b36',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-primary': '0 0 45px 0 rgba(29, 95, 255, 0.45)',
        'glow-surface': '0 0 55px 0 rgba(21, 55, 166, 0.35)',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at top, rgba(29,95,255,0.3), transparent 55%)',
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 0), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 0)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.45, filter: 'drop-shadow(0 0 35px rgba(53,120,255,0.45))' },
          '50%': { opacity: 0.9, filter: 'drop-shadow(0 0 55px rgba(53,120,255,0.75))' },
        },
        'drift-slow': {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(15px,-10px,0) scale(1.05)' },
          '100%': { transform: 'translate3d(0,0,0) scale(1)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        'drift-slow': 'drift-slow 18s ease-in-out infinite',
        'slow-spin': 'spin 18s linear infinite',
      },
    },
  },
  plugins: [],
};
