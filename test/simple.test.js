const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const should = require('should');

/**/
describe('TestSimple',function(){
    //测试基本功能
    it('test the simple',function(done){
        var testDirectory = path.join(__dirname, 'cases', 'simple');
        var outputDirectory = path.join(__dirname, 'js', 'simple');

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
            }

            for(n in expectedFile){
                var _file = mapJson[n][expectedFile[n]];
                _file = path.join(outputDirectory,_file);
                //console.log(fs.existsSync(_file));
                (fs.existsSync(_file)).should.be.eql(true);
            }

            done();
        });
    });
});
