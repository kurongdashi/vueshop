#webpack 打包工具

###build 主配置目录，基本上不用修改
``` 
#build.js文件

```
###config目录打包输出配置项，我们自己要修改的地方index.js文件
``` 
# dev 模块下是开发时打包输出，基本不用修改
# build 模块下是我们要修改的地方
# 模板输出文件
index: path.resolve(__dirname, '../dist/index.html'),
# 输出目录
assetsRoot: path.resolve(__dirname, '../dist'),
# 静态资源目录
assetsSubDirectory: 'static',
# 公共资源前缀，要修改，否则默认是 /static/... 找不到
assetsPublicPath: '/',

```
###src目录下的assets 目录和 ../static 目录都是存放静态资源的
1. assets目录下一般存放，和组件相关近的，会被webpack打包
2. static 目录下存放的，资源，图片会原样引用，不会被压缩打包
