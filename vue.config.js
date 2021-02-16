module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '登录'
        return args
      })
  },
  pwa: {

    iconPaths: {

      favicon32: 'favicon.ico',

      favicon16: 'favicon.ico',

      appleTouchIcon: 'favicon.ico',

      maskIcon: 'favicon.ico',

      msTileImage: 'favicon.ico'

    }

  },
}