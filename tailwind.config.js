/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        loopLtr: 'loopLtr 7s infinite',
        loopRtl: 'loopRtl 7s infinite',
      },

      keyframes: {
        loopLtr: {
          "0%" : {
            transform: 'translate(0px,0px) scale(1)'
          },
          "33%" : {
            transform: 'translate(60px,0px) scale(1.2)'
          },
          "66%" : {
            transform: 'translate(30px,0px) '
          },
          "100%" : {
            transform: 'translate(0px,0px) '
          }
        },
        loopRtl: {
          "0%" : {
            transform: 'translate(0px,0px) scale(1)'
          },
          "33%" : {
            transform: 'translate(-60px,0px) scale(1.2)'
          },
          "66%" : {
            transform: 'translate(-30px,0px) '
          },
          "100%" : {
            transform: 'translate(0px,0px) '
          },
        },

      }
    },
  },
  plugins: [],
}
