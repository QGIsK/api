import theme from '@nuxt/content-theme-docs'

export default theme({
  head: {
    script: [
      {
        'async': true,
        'defer': true,
        'data-domain': 'api.docs.demiann.dev',
        'data-api': 'https://demiann.dev/uwu/api/event',
        'src': 'https://demiann.dev/uwu/js/script.js',
      },
    ],
  },
  docs: {
    primaryColor: '#E24F55',
  },
})
