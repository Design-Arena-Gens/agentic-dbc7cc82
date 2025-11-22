import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", "ui-sans-serif", "system-ui"]
      },
      colors: {
        primary: {
          50: "#f3f0ff",
          100: "#e1dbff",
          200: "#c4b7ff",
          300: "#9d84ff",
          400: "#7c58ff",
          500: "#6432ff",
          600: "#5521e6",
          700: "#4519b4",
          800: "#36148c",
          900: "#2c116f"
        },
        accent: {
          100: "#fff4d6",
          200: "#ffe2a1",
          300: "#ffcd66",
          400: "#ffb125",
          500: "#ff9900"
        }
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at top left, rgba(124,88,255,0.45), transparent 45%), radial-gradient(circle at bottom right, rgba(255,153,0,0.35), transparent 50%)",
        "noise-texture": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\"><filter id=\"noiseFilter\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"1.35\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23noiseFilter)\" opacity=\"0.23\"/></svg>')"
      }
    }
  },
  plugins: []
};

export default config;
