# map-webpack-plugin

## 安装 Install

```shell
npm install map-webpack-plugin
```
## 日志 Log
* 1.1.0 增加文件的合并功能，当merge为文件路径时，则合并提供的文件。
* 1.0.1 增加.npmignore 文件，忽略测试文件，减小安装包的容量。
* 1.0.0 增加测试用例,多方测试后，升级为稳定版1.0.0
* 0.3.0 增加文件过滤
* 0.2.2 增加默认的字体规则
* 0.2.1 增加了合并原来文件的json数据，前提是json数据没有错误（比如：文件版本冲突未解决）。

## 配置 Usage
``` javascript
var MapPlugin = require('map-webpack-plugin');
var mapPluginInstance = new MapPlugin({
    filename:'map.json',//输出的文件名 即保存的文件
    path: './',//输出的目录 即保存的路径
    rule: { //定义输出的类型,非必填项
        font: /\.woff$/i
    },
    filter: ['.action'],//过滤文件类型
    merge: true //跟文件的json数据进行合并 两种情况，如果是true or false 则表示是否合并配置中的filename文件，如果是string类型，则需要是一个文件的路径（此文件必须是json文件，并且没有语法错误），这个时候会合并提供的这个文件，比如：path.join(__dirname, './core.json')
});


module.exports = {
  ...
  plugins: [
    mapPluginInstance
  ]
};
```

## 输出的文件 Output
```js
{
    "js":{
        "js/a.js":"js/a.3efdr5.js"
    },
    "css":{
        "css/a.css":"css/a.3efdr5.css"
    },
    "img":{
        "img/err.png":"img/err.6sfetg.png"
    },
    "font":{
        "fonts/iconfont.woff": "fonts/iconfont.35c9d1.woff"
    }
    "other":{}
}
```
