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
        // Bound to the CSS palette in main.css so both themes flow through the
        // same class names. The <alpha-value> placeholder keeps modifiers such
        // as bg-slate-900/50 working.
        abyss: 'rgb(var(--c-abyss) / <alpha-value>)',
        cyber: 'rgb(var(--c-cyber) / <alpha-value>)',
        'cyber-light': 'rgb(var(--c-cyber-light) / <alpha-value>)',
        'neon-blue': 'rgb(var(--c-neon) / <alpha-value>)',
        'electric-blue': 'rgb(var(--c-electric) / <alpha-value>)',
        white: 'rgb(var(--c-heading) / <alpha-value>)',
        slate: {
          200: 'rgb(var(--c-slate-200) / <alpha-value>)',
          300: 'rgb(var(--c-slate-300) / <alpha-value>)',
          400: 'rgb(var(--c-slate-400) / <alpha-value>)',
          500: 'rgb(var(--c-slate-500) / <alpha-value>)',
          600: 'rgb(var(--c-slate-500) / <alpha-value>)',
          700: 'rgb(var(--c-slate-700) / <alpha-value>)',
          800: 'rgb(var(--c-slate-800) / <alpha-value>)',
          900: 'rgb(var(--c-slate-900) / <alpha-value>)',
          950: 'rgb(var(--c-slate-950) / <alpha-value>)',
        },
        cyan: {
          200: 'rgb(var(--c-cyan-200) / <alpha-value>)',
          300: 'rgb(var(--c-cyan-300) / <alpha-value>)',
          400: 'rgb(var(--c-cyan-400) / <alpha-value>)',
          500: 'rgb(var(--c-cyan-500) / <alpha-value>)',
          600: 'rgb(var(--c-cyan-600) / <alpha-value>)',
          900: 'rgb(var(--c-cyan-900) / <alpha-value>)',
          950: 'rgb(var(--c-cyan-950) / <alpha-value>)',
        },
        emerald: { 400: 'rgb(var(--c-emerald) / <alpha-value>)' },
        blue: { 500: 'rgb(var(--c-blue-500) / <alpha-value>)' },
        'cyber-glow': 'rgb(var(--c-neon) / 0.5)',
        'hud-border': 'rgb(var(--c-cyan-500) / 0.3)',
        'hud-bg': 'rgb(var(--c-slate-950) / 0.75)',
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
        'spin-slow': 'spin 6s linear infinite',
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
