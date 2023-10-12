import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary: '#1E2640',
      cardSecondary: '#0E4F82',
      card: '#146EB4',
      white: '#FFFFFF',
      hover: '#2C5BCD',
      black: '#000000',
      background: '#F2F2F6',
      surface: '#DFEAF0',
      link: '#0D6EFD',
      red: '#D32F2F',
    },
  },
  plugins: [],
}
export default config
