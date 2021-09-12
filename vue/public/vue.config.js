module.exports = {
    devServer: {
        proxy: {
            '/api': {
				// target: 'http://192.168.1.88:8082',
				target: 'http://192.168.1.123:8082',
				// target: 'http://192.168.1.123:8082',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api/': ''
				}
			},
			'/wexin': {
				target: 'https://api.weixin.qq.com',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api/': ''
				}
			},
        }
      }
  }