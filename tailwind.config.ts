import { Bellefair } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "h1": ["var(--heading-1)", {lineHeight: 'normal', fontWeight: '400'}],
        "h2": ["var(--heading-2)", {lineHeight: 'normal', fontWeight: '400'}],
        "h3": ["var(--heading-3)", {lineHeight: 'normal', fontWeight: '400'}],
        "h4": ["var(--heading-4)", {lineHeight: 'normal', fontWeight: '400'}],
        "h5": ["var(--heading-5)", {lineHeight: 'normal', fontWeight: '400', letterSpacing: "var(--header-letter-spacing)"}],
        "subHeading-1": ["var(--sub-heading-1)", {lineHeight: 'normal', fontWeight: '400'}],
        "subHeading-2": ["var(--sub-heading-2)", {lineHeight: 'normal', fontWeight: '400', letterSpacing: "var(--sub-header-letter-spacing)"}],
        "nav": ["var(--nav-text)", {lineHeight: 'normal', fontWeight: '400', letterSpacing: "var(--nav-letter-spacing)"}],
        "body": ["var(--body)", {lineHeight: 'var(--body-line-height)', fontWeight: '400'}]
      },
  
      fontFamily: {
        "bellefair": "var(--bellefair)",
        "barlow-condensed": "var(--barlow-condensed)",
        "barlow": "var(--barlow)"
  
      },

      fontWeight: {
        'thin': '200',
        'regular': '400',
        'bold': '700'
      },
  
      colors: {
        "dark-blue": "var(--dark-blue)",
        "blue": "var(--blue)",
        "light-blue": "var(--light-blue)",
        "white": "var(--white)",
      },

      screens: {
        'mobile': '23.4375rem',
        'tablet': '48rem',
        'desktop': '90rem',
        'wide': '120rem'
      }
    }
  },

  plugins: [require('daisyui')],

  daisyui: {
    darkTheme: "dark",
    base: false
    
  }
};
export default config;
