/**
 * Created by Administrator on 2018/1/4.
 */
let http=require('http');
let url=require('url');
let path=require('path');
http.createServer((req,res)=>{
    console.log('来了');
    res.write('hello world');

}).listen('3000',()=>{
  console.log('服务开启了');
})
