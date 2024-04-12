import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        truculenta: 'var(--font-truculenta)',
      },
      colors: {
        'amarelo': '#FFC700',
        'vermelho': '#C53D2D',
        'marrom': '#421709',
        'branco': '#FFFFFE',
        'creme': {
          300: '#FFF8E4',
          500: '#FFF2CB'
        }
      }

    },
  },
  plugins: [],
};
export default config;
