import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary: '#1C212D',
      white: '#FFFFFF',
      hover: '#2C5BCD',
      black: '#000000',
      yellow: '#FFD831',
      surface: '#DFEAF0'
    }
  },
  plugins: [],
}
export default config
