/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ...
        Bee: {
          Heading: "#2E234E",
          Black: "#000000",
          Input_Bg1: "#F6F6F6",
          Error: "#EA4335",
          Main_Bg: "#FFFFFF",
          Gray: "#888888",
          Disabled: "#88888888",
          Dot: "#D9D9D9",
          Continue: "#7B7B7B",
          Black2: "#212121",
          NavBackground: "#EDF4FC",
          Border: "#E3E3E3",
          Gray2: "#585858",
          Background: "#2294B1",
          Background2: "#DEFFEA",
          Green: "#0EB74B",
          SideBarBackground: "#E3F2FF",
        },
        // ...
      },
      textColor: {
        IconColor: "#2294B1",
        CyanColor: "#2294B1",
        GrayColor: "#888888",
      },
      borderColor: {
        BorderColor: "#2294B1",
      },
      fontFamily: {
        Nunito: "Nunito",
      },
      scale: {
        175: "1.75",
      },
    },
  },
  plugins: [],
};
