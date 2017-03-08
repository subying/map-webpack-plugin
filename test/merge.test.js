const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const should = require('should');

/**/
describe('TestMerge',function(){
    //测试merge功能 合并后保留原来的map.json里面的 other 中的 main.txt
    it('test the merge',function(done){
        var testDirectory = path.join(__dirname, 'cases', 'merge');
        var outputDirectory = path.join(__dirname, 'js', 'merge');
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
            //if(!fs.existsSync(mapFile)) return done(new Error('map.json is not exists'));
            var mapJson = require(mapFile);

            //判断main.txt是否存在  因为一开始写入了map.json
            if(!mapJson['other'] || !mapJson['other']['main.txt']){
                return done(new Error('merge failed!'));
            }

            done();
        });
    });

    //测试merge功能 合并提供的文件（此时merge为文件路径） 先准备了一个合并文件 core.json，只需要判断core.json的内容有没有合并过去
    it('test the merge-file',function(done){
        var testDirectory = path.join(__dirname, 'cases', 'merge-file');
        var outputDirectory = path.join(__dirname, 'js', 'merge-file');
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
            //if(!fs.existsSync(mapFile)) return done(new Error('map.json is not exists'));
            var mapJson = require(mapFile);

            //判断tool.js是否存在  这个是准备的core.json文件中的数据
            if(!mapJson['core'] || !mapJson['core']['tool.js']){
                return done(new Error('merge failed!'));
            }

            done();
        });
    });
});
