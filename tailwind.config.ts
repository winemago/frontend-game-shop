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
        surface: "var(--surface)",
        "surface-secondary": "var(--surface-secondary)",
        "surface-neutral": "var(--surface-neutral)",
        neutral: "var(--neutral)",
        "fill-primary": "var(--fill-primary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-on-fill": "var(--text-on-fill)",
        stroke: "var(--stroke)",
        "stroke-secondary": "var(--stroke-secondary)",
        "fill-secondary": "var(--fill-secondary)",
      },
      height: {
        "nav-height": "var(--nav-height)",
        "footer-height": "var(--footer-height)",
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
