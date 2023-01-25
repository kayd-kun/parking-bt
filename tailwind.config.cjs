/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};

// For input type number
// @layer components = {
//     .no-spinner {
//       -moz-appearance: textfield;
//     }

//     .no-spinner::-webkit-outer-spin-button,
//     .no-spinner::-webkit-inner-spin-button {
//       margin: 0;
//       -webkit-appearance: none;
//     }
//   }