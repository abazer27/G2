import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
      },
      colors: {
        custom: {
          dark: "#111111",
          medium: "#666666",
          light: "#E5E5E5",
          lighter: "#F4F4F4",
          lightest: "#FAFAFA",
          border: "#EAEAEA",
        },
      },
      backgroundImage: {
        'gradient-mono': 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
        'gradient-mono-light': 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        'gradient-mono-soft': 'linear-gradient(to right, #e0e0e0, #f5f5f5)',
        'gradient-dark': 'linear-gradient(to bottom, #1a1a1a, #2d2d2d)',
      },
    },
  },
  plugins: [],
} satisfies Config;
