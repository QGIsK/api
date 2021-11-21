import theme from '@nuxt/content-theme-docs'

export default theme({
  head: {
    script: [
      {
        'async': true,
        'defer': true,
        'data-domain': 'api.docs.demiann.dev',
        'src': 'Demian',
      },
    ],
  },
  docs: {
    primaryColor: '#E24F55',
  },
})
