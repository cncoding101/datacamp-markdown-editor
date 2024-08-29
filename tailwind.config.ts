import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        dark: '#22303c',
        darker: '#192734',
        darkest: '#15202b',
        contrast: '#8899ac',
      },
    },
  },
  plugins: [],
} satisfies Config;
