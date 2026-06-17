/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg:      '#FFFFFF',
        surface: '#EFF0F1',
        ink:     '#20211F',
        muted:   '#5E605C',
        line:    '#E6E7E7',
        accent:  '#8C6B14',
        'accent-soft': '#EFE8D0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Newsreader"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
