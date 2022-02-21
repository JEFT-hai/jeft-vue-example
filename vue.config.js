/*
 * @Author: your name
 * @Date: 2022-02-21 09:19:50
 * @LastEditTime: 2022-02-21 09:27:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\vue.config.js
 */
/*
 * @Author: your name
 * @Date: 2019-11-29 09:36:27
 * @LastEditTime: 2022-01-13 15:07:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \youcai\vue.config.js
 */
// const path = require('path')
const Oss = require('./oss') // 引入刚刚创建的oss.js文件
const WebpackAliyunOss = require('webpack-aliyun-oss')

// const CompressionPlugin = require('compression-webpack-plugin') // gzip
// const UglifyPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const vConsolePlugin = require('vconsole-webpack-plugin')
// console.log(process.env.NODE_ENV, 'node')
module.exports = {
  outputDir: 'dist',
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: () => {
    // console.log('config', config.mode)
    if (process.env.NODE_ENV === 'production') {
      return {
        optimization:{
            minimizer:
            [
              new TerserPlugin({
                terserOptions: {
                  mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的，具体看后面的链接
                  compress: {
                      drop_console: false,//传true就是干掉所有的console.*这些函数的调用.
                      drop_debugger: false, //干掉那些debugger;
                      // pure_funcs: ['console.log'] // 如果你要干掉特定的函数比如console.info ，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
                  }
                }
              })
            ]
          },
        plugins: [
          new WebpackAliyunOss({
            from: './dist/**', // 上传那个文件或文件夹  可以是字符串或数组
            // dist: '',  // 需要上传到oss上的给定文件目录
            region: Oss.region,
            accessKeyId: Oss.accessKeyId,
            accessKeySecret: Oss.accessKeySecret,
            bucket: Oss.bucket,
            deletOrigin: false,
            deleteEmptyDir: false,
            // test: true,
            setOssPath: filePath => {
              // some operations to filePath
              let index = filePath.lastIndexOf('dist')
              let Path = filePath.substring(index + 4, filePath.length)
              console.log('Path', Path, Path.replace(/\\/g, '/'))
              return Path.replace(/\\/g, '/')
            },
            setHeaders: () => { // filePath
              // some operations to filePath
              // return false to use default header
              return {
                'Cache-Control': 'max-age=31536000'
              }
            }
          })
        ],
      }
    }
  },
//   pluginOptions: {
//     'style-resources-loader': {
//         preProcessor: 'less',
//         patterns: [
//             path.resolve('./src/assets/less/base.less')
//         ]
//     }
//   },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
