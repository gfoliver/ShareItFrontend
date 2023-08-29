/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F2F9EB',
        primary: '#0F6441',
        dark: '#1E1E1E',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'logo': ['Bebas Neue', 'sans-serif']
      },
      container: {
        center: true,
        padding: '2rem',
      }
    },
  },
  plugins: [],
}

