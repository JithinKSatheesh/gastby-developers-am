/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT : "10px",
        sm: '20px',
        md:"20px",
        lg: '50px',
        xl: '50px',
        '2xl' : '50px',
      },
    },
  },
  plugins: [],
}
