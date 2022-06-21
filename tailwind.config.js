module.exports = {
  content: [
    './src/app/**/*.{html,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['SfProDisplay', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1a1e29',
        secondary: '#c5a578',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
