import theme from '@nuxt/content-theme-docs'

export default theme({
  head: {
    script: [
      {
        'async': true,
        'defer': true,
        'data-website-id': '28ca9243-393b-4003-9093-8a824df487f8',
        'src': 'https://media.demiann.dev/umami.js',
      },
    ],
  },
  docs: {
    primaryColor: '#E24F55',
  },
})
