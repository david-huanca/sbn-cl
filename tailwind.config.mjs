/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nazarene: {
          50:  '#fdfaed',
          100: '#faf4d3',
          200: '#f4e99e',
          300: '#edd968',
          400: '#e5c452',
          500: '#d4a52b',
          600: '#b08920',
          700: '#8a6c18',
          800: '#644f12',
          900: '#42330b',
        },
        gold: {
          400: '#ECD06F',
          500: '#D97706',
          600: '#B45309',
        },
        cream: '#FAFAF9',
        charcoal: '#1C1917',
        warmgray: '#57534E',
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(66,51,11,0.92) 0%, rgba(176,137,32,0.85) 50%, rgba(66,51,11,0.95) 100%)',
      },
    },
  },
  plugins: [],
};
