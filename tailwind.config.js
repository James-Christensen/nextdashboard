/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light", "dark", "emerald", "corporate", "halloween", "garden", "forest","lofi", "pastel", "luxury", "dracula","business", "night", "coffee"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
