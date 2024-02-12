module.exports = {
    client: {
      service: {
        name: 'lotto-app',
        url: import.meta.env.VITE_API_URL
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }