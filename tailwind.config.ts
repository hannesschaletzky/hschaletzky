import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        "-30": "-30deg",
      },
      width: {
        "14/7": "200%",
      },
      zIndex: {
        "-10": "-10",
      },
      height: {
        "150px": "150px",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "sans-serif"],
        // quoted, an unquoted name with a digit ("3") is invalid CSS
        brand: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      // easter egg feedback
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-6deg)" },
          "75%": { transform: "rotate(6deg)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 400ms ease-in-out",
      },
      // HASC brand colors, see brand/hasc-logo-paket/LIESMICH.txt
      colors: {
        navy: {
          DEFAULT: "#15233A",
          light: "#1C2E4A",
          lighter: "#26395A",
        },
        teal: {
          DEFAULT: "#3FB8A0",
          light: "#6FD0BC",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
