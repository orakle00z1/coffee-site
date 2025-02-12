let DEFAULT;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        "dana-med": "dana-med",
        "dana": "dana",
        "dana-bold": "dana-bold",
        "dana-light": "dana-light",

        "mah-sbold": "mah-sbold",
        "mah-light": "mah-light",
        "mah-med": "mah-med",

        "lili-reg": "lili-reg",
        "lili-reg2": "lili-reg2",
        "lili-bold": "lili-bold",

        "morabba-bold2": "morabba-bold2",
        "morabba-bold": "morabba-bold",
        "morabba-medium": "morabba-medium",
        "morabba-light": "morabba-light",
      },
      letterSpacing: {
        "tightest": "-0.065em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      backgroundImage: {
        "bg-desktop" : "url(../public/img/CoffeeShop-Files/headerBgDesktop.webp)",
        "bg-mobile" : "url(../public/img/CoffeeShop-Files/headerBgMobile.webp)"

      }
    },
    screens:{
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1580px'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
