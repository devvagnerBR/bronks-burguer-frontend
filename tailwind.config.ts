import type { Config } from "tailwindcss";


/** @type {import('tailwindcss').Config} */


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '520px'
      },
      backgroundImage: {
        'banner': "url(/backgrounds/banner-delivery.png)"
      },
      fontFamily: {
        truculenta: 'var(--font-truculenta)',
      },
      colors: {
        'amarelo': '#FFC700',
        'preto': '#1c1c1c',
        'vermelho': '#C53D2D',
        'marrom': '#421709',
        'branco': '#FFFFFE',
        "verde": '#96FD72',
        'creme': {
          300: '#FFF8E4',
          500: '#FFF2CB'
        }
      },
      boxShadow: {
        'btn': '2px 3px 0px 2px, 4px 5px 0px 1px #421709',
        'hover': '2px 0px 0px 1.8px #421709, 5px 1px 0px 1px #421709',
      }
    },
  },
  plugins: [],
};
export default config;
