/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'l-bg': '#08090a',
        'l-bg-secondary': '#111113',
        'l-bg-tertiary': '#1a1a1f',
        'l-border': '#1e1e22',
        'l-border-secondary': '#2e2e32',
        'l-text': '#e8e8ec',
        'l-text-secondary': '#8b8b93',
        'l-text-tertiary': '#5c5c66',
        'l-text-quaternary': '#3e3e44',
        'l-blue': '#5e6ad2',
        'l-purple': '#8b5cf6',
        'l-green': '#02b8a4',
        'l-yellow': '#f2c94c',
        'l-red': '#eb5757',
        'l-orange': '#ff7236',
        'l-teal': '#02b8cc',
        'l-indigo': '#6366f1',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
