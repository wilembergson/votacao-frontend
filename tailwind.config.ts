import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "azul-escuro": "#004B5B",
        "azul-claro": "#5DABA7",
        "laranja": "#F36F31",
        "beje-claro": "#E9DFD9",
        "beje-escuro": "#DED2CC"
      },
      textColor: {
        "azul-escuro": "#004B5B",
        "azul-claro": "#5DABA7",
        "laranja": "#F36F31",
        "beje-claro": "#E9DFD9",
        "beje-escuro": "#DED2CC"
      },
      fontFamily: {
        "barlow": ['"Barlow Condensed"', 'sans-serif'],
        "roboto": ['"Roboto"', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
