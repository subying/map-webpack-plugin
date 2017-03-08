const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const should = require('should');

/**/
describe('TestFilter',function(){
    //测试filter功能 过滤.woff后缀文件
    it('test the filter',function(done){
        var testDirectory = path.join(__dirname, 'cases', 'filter');
        var outputDirectory = path.join(__dirname, 'js', 'filter');
        var options = { entry: { test: './index.js' } };
        var configFile = path.join(testDirectory, 'webpack.config.js');

        if(fs.existsSync(configFile)) options = require(configFile);
        options.context = testDirectory;
        if(!options.output) options.output = { filename: '[name].[chunkhash:6].js' };
        if(!options.output.path) options.output.path = outputDirectory;

        webpack(options, function(err, stats) {
            if(err) return done(err);
            //if(stats.hasErrors()) console.log(stats.toString());
            if(stats.hasErrors()) return done(new Error(stats.toString()));

            var mapFile = path.join(outputDirectory, 'map.json');

            //if(!fs.existsSync(mapFile)) console.log('map.json is not exists');
            if(!fs.existsSync(mapFile)) return done(new Error('map.json is not exists'));
            var mapJson = require(mapFile);
            var expectedFile = {
                'js': 'main.js',
                'css': 'main.css',
                'font': 'iconfont.woff'
            };

            //如果输出的map中的font 存在 iconfont.woff
            if(mapJson['font'][expectedFile['font']]){
                return done(new Error('filter is not run,iconfont.woff is exists!'));
            }

            for(var n in expectedFile){
                if(expectedFile[n]!='iconfont.woff'){
                    var _file = mapJson[n][expectedFile[n]];
                    _file = path.join(outputDirectory,_file);
                    //console.log(fs.existsSync(_file));
                    (fs.existsSync(_file)).should.be.eql(true);
                }

            }

            done();
        });
    });
});
