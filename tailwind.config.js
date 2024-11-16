/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        academics: "url('./assets/image-1.jpg')",
        admission: "url('./assets/image-2.jpg')",
        contact: "url('./assets/image-5/jpg')",
      },
    },
  },
  plugins: [],
};
