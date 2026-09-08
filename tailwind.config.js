/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#06070a',
          900: '#0b0d13',
          850: '#11141d',
          800: '#181c28',
          700: '#23293a',
          600: '#343d54',
        },
        cyan: {
          400: '#38bdf8',
          500: '#00f0ff',
          600: '#0284c7',
        },
        amber: {
          400: '#fbbf24',
          500: '#ff6b00',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scanLine 2.5s ease-in-out infinite alternate',
        'grid-float': 'gridFloat 20s linear infinite',
      },
      keyframes: {
        scanLine: {
          '0%': { transform: 'translateY(-100%)', opacity: '0.2' },
          '50%': { opacity: '0.9' },
          '100%': { transform: 'translateY(100%)', opacity: '0.2' },
        },
        gridFloat: {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
    },
  },
  plugins: [],
};
