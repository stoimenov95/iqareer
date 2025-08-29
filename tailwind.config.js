/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Додавање на Inter фонтот за да може да се користи со класа како font-sans
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
