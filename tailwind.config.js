/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bannerimage.jpg')",
      }, 
      colors: {
        "farst-color": "#3D3BF3",
        "secound-color": "#9694FF",
        "third-color": "#EBEAFF",
        "fourth-color": "#FF2929",
      },
    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"]
    },
    
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

