/*
 *@description webpack map构建插件
*/

const merge = require('lodash.merge');
const Path  = require('path');
const fs    = require('fs');


class MapWebpackPlugin{
    constructor(options){
        this.options = merge({}, {
          path: '.',
          filename: 'webpack-map.json'
        }, options);
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

                if(/.*\.[a-z\d]+\..*$/.test(_name)){
                    _name =  _nameObj.dir+'/'+_nameObj.name.split('.')[0]+_ext;
                }


                if(_ext==='.js' || _ext === '.css'){
                    //
                    _type = _ext.replace('.','');
                }else if( imgRegx.test(_ext)){
                    _type = 'img';
                }

                //过滤map 文件
                if(_ext != '.map'){
                    mapJson[_type][_name] = item.name;
                }

            });

            content = JSON.stringify(mapJson,null,2);

            fs.writeFileSync(fileName,content,'utf8');


            callback();
        });

    }
}
module.exports = MapWebpackPlugin;
