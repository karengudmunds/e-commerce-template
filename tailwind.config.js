module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    minHeight: {
      'tall-35': '35vh',
      'tall-50': '50vh',
      'tall-60': '60vh',
      'tall-70': '70vh',
      'tall-80': '80vh',
      'tall-90': '90vh',
      'tall-100': '100vh',
      'tall-110': '110vh',
    },
    fontFamily: {
      sans: [ 'Manrope', 'sans-serif' ],
   },
    extend: {
      aspectRatio: {
        'landscape': '4/3',
        'portrait': '3/4',
        'portrait-tall': '3/5',
      },
    spacing: {
      '5p': '5%',
      '10p': '10%',
    },
    colors: {
      'bg-dark': '#2A3430;',
      'bg-light': '#f2eee9;',
      'bg-featured': '#e8e1d9;',
    },
    },
  },
  plugins: [],
}
