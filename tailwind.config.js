const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'light-gray': 'hsl(212 45% 89%)',
        'grayish-blue': 'hsl(220 15% 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)'
      }
    }
  },
  variants: {
    extend: {

    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
