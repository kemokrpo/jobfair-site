module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#2b2323',
        text: '#35404e',
        background: '#f9f9ff',
        primary: '#1F4293',
        secondary: '#162E72',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'big': '3.6rem',
        'h2': '2.26rem',
        'p': '1.3rem',
      },
      spacing: {
        '10rem': '10rem',
      },
      letterSpacing: {
        'wide': '1.5rem',
      },
      boxShadow: {
        'btn-hover': '0 5px 15px 2px rgb(63 44 44 / 18%)',
      },
    },
  },
  plugins: [],
};
