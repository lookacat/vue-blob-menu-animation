module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 6060, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
  },
}
