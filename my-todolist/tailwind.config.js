/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'vio-gray': '#6374ae',
      'pastel-green': '#69d24b',
    },
    screens: {
      '2xdextop': { 'max': '1600px' },
      'xdesktop': { 'max': '1279px' },
      'desktop': { 'max': '1023px' },
      'tablet': { 'max': '767px' },
      'xmob': { 'max': '639px' },
      'mob': { 'max': '459px' },
    },
    extend: {
      colors: {
        'vio-gray': {
          '50': '#f5f6fa',
          '100': '#eaebf4',
          '200': '#d0d4e7',
          '300': '#a6b0d3',
          '400': '#7686ba',
          '500': '#6374ae',
          '600': '#414f88',
          '700': '#36406e',
          '800': '#30395c',
          '900': '#2c324e',
          '950': '#1d2034',
        },
        'pastel-green': {
          '50': '#effbea',
          '100': '#dbf6d1',
          '200': '#baeea8',
          '300': '#8ee274',
          '400': '#69d24b',
          '500': '#48b72b',
          '600': '#34921e',
          '700': '#2a6f1c',
          '800': '#25591b',
          '900': '#214c1b',
          '950': '#0e290a',
        },
      }
    },
  },
  plugins: [],
}
