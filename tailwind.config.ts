import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#20B78A",
        secondary: "#FFCC32",
        tertiary: "#FF8A14",
        error: "#F15632",
        textPrimary: "#121615",
        textSecondary: "#58595B",
        disclaimer: "#F16D27",
        info: "rgba(71, 129, 164, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
