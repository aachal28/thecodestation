/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'terminal': {
          'black': '#0a0a0a',
          'dark': '#111111',
          'gray': '#1a1a1a',
          'light': '#2a2a2a',
          'white': '#ffffff',
          'yellow': '#FFDD57',
          'red': '#FF3C00',
          'blue': '#00FFFF',
          'green': '#00FF88',
          'purple': '#FF00FF',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'IBM Plex Mono', 'Fira Code', 'monospace'],
        'terminal': ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'content': '1200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'border-shift': 'borderShift 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFDD57, 0 0 10px #FFDD57, 0 0 15px #FFDD57' },
          '100%': { boxShadow: '0 0 10px #FFDD57, 0 0 20px #FFDD57, 0 0 30px #FFDD57' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#FFDD57' },
        },
        borderShift: {
          '0%': { borderColor: '#FFDD57' },
          '50%': { borderColor: '#00FFFF' },
          '100%': { borderColor: '#FFDD57' },
        }
      },
      boxShadow: {
        'terminal': '0 0 0 1px rgba(255, 221, 87, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(255, 221, 87, 0.5)',
        'glow-blue': '0 0 20px rgba(0, 255, 255, 0.5)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.5)',
      }
    },
  },
  plugins: [],
}