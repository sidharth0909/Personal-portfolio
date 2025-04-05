/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#000000',
          secondary: '#111111',
          accent: '#222222',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#F5F5F5',
          accent: '#EEEEEE',
        },
      },
    },
  },
  plugins: [],
}
