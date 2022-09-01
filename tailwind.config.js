/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firago: 'Firago, sans-serif',
        firagoMedium: 'Firago-medium, sans-serif',
        firagoBold: 'Firago-bold, sans-serif'
      },
      boxShadow: {
        'alert': '0 4px 24px 0 rgba(0, 0, 0, 0.06)',
        'item': '0 2px 3px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
