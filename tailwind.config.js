/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {
      backgroundImage: {
      'bg': "url('../public/hero_illustration.png')",
      
    }},
=======
    extend: {},
>>>>>>> 67465099d53fc712312218259d190d72e517a50f
  },
  plugins: [],
}