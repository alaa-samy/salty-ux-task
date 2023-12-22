/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  darkMode: 'class',
  theme: {
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '21px',
      '3xl': '24px',
      '4xl': '26px',
      '5xl': '40px',
      '6xl': '46px',
      '7xl': '56px',
      '8xl': '84px',
    },
    fontFamily:{
      sens: ['Sen', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "var(--main-color)",
        secondary: "var(--secondary-color)",
        third: "var(--third-color)",
        forth: "var(--forth-color)",
        bg_main: "var(--bg-main)",
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      
    },
  },
  plugins: [],
};
