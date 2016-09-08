'use strict';
/*
 *@description webpack map构建插件
*/

const merge  = require('lodash.merge');
const Path   = require('path');
const fs     = require('fs');
const mkdirp = require('mkdirp');


class MapWebpackPlugin{
    constructor(options){
        this.options = merge({}, {
          path: '.',
          filename: 'webpack-map.json',
          rule:{
              js:/\.js$/i,
              css:/\.css$/i,
              img:/\.(jpe?g|png|gif)$/
          },
          merge: false //是否合并原来文件的json 必须保证原来文件的json数据没有错误
        }, options);
    }

    //检测文件类型
    checkType(filename){
        var _rule = this.options.rule;
        var _type = 'other';

        for(let name in _rule){
            if(_rule[name].test(filename)){
                _type = name;
            }
        }

        return _type;
    }

    apply(compiler){
        //
        var _self = this;

        compiler.plugin('after-emit', function (compilation, callback) {
            var options = compiler.options;
            var stats = compilation.getStats().toJson({
                hash: true,
                publicPath: true,
                assets: true,
                chunks: false,
                modules: false,
                source: false,
                errorDetails: false,
                timings: false
            });
            var sPath = stats.publicPath ;
            var assetsByChunkName = stats.assetsByChunkName;
            var assetsArr = stats.assets;
            var hash = stats.hash;

            var mapJson = {};
            var fileName = Path.join(_self.options.path,_self.options.filename);
            var content = '';

            assetsArr.map((item)=>{
                var _name = item.name;
                var _nameObj = Path.parse(_name);
                var _ext = _nameObj.ext;

                var _regx = new RegExp(".*\\.([a-z0-9]+)"+_ext);
                var _match,_arr,_rstr;

                if(_regx.test(_name)){
                    _match = _name.match(_regx);

                    //去掉hash
                    if(_match[1]){
                        _rstr = _match[1]+'.';
                    }else{
                        _arr = _nameObj.name.split('.');
                        _rstr = _arr[_arr.length-2]+'.';
                    }

                    _name =  _name.replace(_rstr,'');

                }

                var _type = _self.checkType(item.name);

                if(!mapJson[_type]){
                    mapJson[_type] = {};
                }

                //过滤map 文件
                if(_ext != '.map'){
                    mapJson[_type][_name] = item.name;
                }

            });

            

            //判断目录  如果目录不存在则创建目录
            if(!fs.existsSync(_self.options.path)){
                mkdirp.sync(_self.options.path);
            }

            //判断是否需要合并 判断文件是否存在
            if(_self.options.merge && fs.existsSync(fileName)){
                var fileCon = fs.readFileSync(fileName);

                try {
                    fileCon = JSON.parse(fileCon, true);
                    mapJson = merge(fileCon,mapJson);
                } catch (error) {
                    //console.log(error);
                }
            }


            content = JSON.stringify(mapJson,null,2);

            fs.writeFileSync(fileName,content,'utf8');


            callback();
        });

    }
}
module.exports = MapWebpackPlugin;
