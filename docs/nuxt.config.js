import theme from '@nuxt/content-theme-docs'

export default theme({
  head: {
    script: [
      {
        'defer': true,
        'data-website': 'api.docs.demiann.dev',
        'src': 'https://media.demiann.dev/js/script.js',
      },
    ],
  },
  docs: {
    primaryColor: '#E24F55',
  },
})
