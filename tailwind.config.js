/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'monkey-orange': withOpacity('--color-accent-rgb'),
        'monkey-brown':  withOpacity('--color-dark-rgb'),
        'monkey-cream':  withOpacity('--color-light-rgb'),
        'monkey-white':  withOpacity('--color-white-rgb'),
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
