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
          }
        }, options);
    }

    //检测文件类型
    checkType(type){
        console.log(this.options.rule);
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
            var mapJson = {
                js: {},//js file
                css: {},//css file
                img:{},// image file
                other: {}
            };
            var imgRegx = /\.(jpe?g|png|gif)$/;
            var fileName = Path.join(_self.options.path,_self.options.filename);
            var content = '';

            assetsArr.map((item)=>{
                var _name = item.name;
                var _nameObj = Path.parse(_name);
                var _ext = _nameObj.ext;
                var _type = 'other';

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


                if(_ext==='.js' || _ext === '.css'){
                    //
                    _type = _ext.replace('.','');
                }else if( imgRegx.test(_ext)){
                    _type = 'img';
                }


                _self.checkType(item.name);

                //过滤map 文件
                if(_ext != '.map'){
                    mapJson[_type][_name] = item.name;
                }

            });

            content = JSON.stringify(mapJson,null,2);

            //判断目录  如果目录不存在则创建目录
            if(!fs.existsSync(_self.options.path)){
                mkdirp.sync(_self.options.path);
            }

            fs.writeFileSync(fileName,content,'utf8');


            callback();
        });

    }
}
module.exports = MapWebpackPlugin;
