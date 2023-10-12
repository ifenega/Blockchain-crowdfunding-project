/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray/25": "#FCFCFD",
        "gray/50": "#F9FAFB",
        "gray/100": "#F2F4F7",
        "gray/200": "#EAECF0",
        "gray/300": "#D0D5DD",
        "gray/400": "#98A2B3",
        "gray/500": "#667085",
        "gray/600": "#475467",
        "gray/700": "#344054",
        "gray/800": "#1D2939",
        "gray/900": "#101828",

        "primary/25": "#FCFAFF",
        "primary/50": "#F9F5FF",
        "primary/100": "#F4EBFF",
        "primary/200": "#E9D7FE",
        "primary/300": "#D6BBFB",
        "primary/400": "#B692F6",
        "primary/500": "#9E77ED",
        "primary/600": "#7F56D9",
        "primary/700": "#6941C6",
        "primary/800": "#53389E",
        "primary/900": "#42307D",



      },

      gradientOpacity: {
        '60': 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

