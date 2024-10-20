const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Ensure both JS/TS files are included
  ],
  theme: {
    extend: {
      // Custom font family using Montserrat as 'roboto'
      fontFamily: {
        roboto: ['Montserrat', 'sans-serif'],
      },
      // Custom animations and keyframes
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      // Adding custom colors if needed
      colors: {
        cyan: colors.cyan,
        emerald: colors.emerald,
        orange: colors.orange,
      },
    },
  },
  // DaisyUI plugin
  plugins: [
    require('daisyui'),
    addVariablesForColors // Adding the custom plugin for CSS variables
  ],
  daisyui: {
    themes: ["cupcake"],  // You can add more daisyUI themes here if needed
  },
};

// Plugin to add CSS variables for Tailwind colors
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
