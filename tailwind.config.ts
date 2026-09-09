import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14120F',
        surface: '#1E1B17',
        'surface-2': '#252119',
        hairline: '#2C2822',
        ivory: '#F2ECE1',
        smoke: '#9C948A',
        bronze: '#C89B3C',
        moss: '#6B8F71',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
