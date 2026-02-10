module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        darkbg: "#05070a",
        card: "#0b0f14"
      },
      boxShadow: {
        glow: "0 0 30px rgba(59,130,246,0.15)"
      }
    }
  },
  plugins: []
};
