/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        evolv: {
          red: '#FF3A4B',      
          green: '#00FF9D',    
          cyan: '#00F2FF',     
          dark: '#080C12',     
          gold: '#FFD700',     // Make sure this is added
        },
      }
    },
  },
  plugins: [],
}