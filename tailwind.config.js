/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0.4)",
          "200": "rgba(0, 0, 0, 0.1)",
          "300": "rgba(0, 0, 0, 0.6)",
        },
        black: "#000",
        whitesmoke: {
          "100": "#f2f0f1",
          "200": "#f0f0f0",
          "300": "#f0eeed",
        },
        tomato: {
          "100": "#ff3333",
          "200": "rgba(255, 51, 51, 0.1)",
        },
      },
      fontFamily: {
        satoshi: "Satoshi",
        "integral-cf": "'Integral CF'",
      },
      borderRadius: {
        "8xs-6": "4.6px",
        xl: "20px",
        "43xl": "62px",
        "sm-4": "13.4px",
      },
    },
    fontSize: {
      sm: "14px",
      "13xl": "32px",
      base: "16px",
      "5xl": "24px",
      "3xs": "10px",
      xl: "20px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
