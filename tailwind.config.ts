import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary: '#272684',
      white: '#FFFFFF',
      hover: '#2C5BCD',
      black: '#000000',
      yellow: '#FFD831',
      surface: '#DFEAF0',
      link: '#0D6EFD',
      red: '#D32F2F',
    }
  },
  plugins: [],
}
export default config
