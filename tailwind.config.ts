import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#FFFFFF",
        "surface-secondary": "#EEEEEE",
        neutral: "#404040",
        "fill-primary": "#585660",
        "text-primary": "#3B3B3B",
        "text-secondary": "#737373",
        "text-on-fill": "#FFFFFF",
        stroke: "#EFEDF3",
        "stroke-secondary": "#8F8F8F",
        "fill-secondary": "#F5F5F4",
      },
      height: {
        "nav-height": "var(--nav-height)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
