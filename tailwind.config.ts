import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        hubot: ["Hubot Sans"],
        space: ["Space Mono"],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require("daisyui")],
}
export default config
