/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        abyss: '#030712',
        cyber: '#0a0f1d',
        'cyber-light': '#111827',
        'neon-blue': '#00f3ff',
        'electric-blue': '#0096ff',
        'cyber-glow': 'rgba(0, 243, 255, 0.5)',
        'hud-border': 'rgba(0, 243, 255, 0.3)',
        'hud-bg': 'rgba(3, 7, 18, 0.75)',
        glacier: {
          50: '#f4f9fd',
          100: '#eaf2f8',
          200: '#e2eef7',
          300: '#90e0ef',
          400: '#00b4d8',
          500: '#0077b6',
          600: '#00f3ff',
          700: '#0096ff',
          800: '#0a0f1d',
          900: '#030712',
        }
      },
      fontFamily: {
        sans: ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        hud: '16px',
        frost: '12px',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2.5s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar-spin': 'radarSpin 4s linear infinite',
        'glitch': 'glitch 1s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 243, 255, 0.4), 0 0 30px rgba(0, 243, 255, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(0, 243, 255, 0.8), 0 0 50px rgba(0, 243, 255, 0.4)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radarSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
