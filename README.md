# shop

## vue-lazyload 插件，图片的懒加载，在加载图片前先加载动画
>cnpm install vue-lazyload --save

1.js中使用
``` 
import lazyload from 'vue-lazyload'

Vue.use(lazyload,{
  loading:'/static/loading/loading-balls.svg'
})

```
2. 模板中使用指令v-lazy
``` 
<img v-lazy="'static/'+good.prodcutImg" alt="">
```

##阿里云node环境搭建
###淘宝镜像 [淘宝](https://npm.taobao.org/)
``` 
# wget 下载node包 
wget [url]

#使用xz -d 命名解压node压缩包
xz -d node-xx.xz 

# 使用tar -xvf 再次解压 node-xx.tar包
tar -xvf node-xx.tar

# 使用 ln -s 建立软连接 到 /usr/local/bin
ln -s /node-xx/bin/node /usr/local/bin/node

ln -s /node-xx/bin/npm /usr/local/bin/npm



```
