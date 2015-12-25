var path = require('path');

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require("webpack");
var WebpackNotifierPlugin = require('webpack-notifier');

var srcPath = path.resolve(__dirname, 'src');

var webpackConfig = {
    context: srcPath,
    entry: './rurple',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'rurple.js',
        library: 'rurple',
        libraryTarget: 'umd'
    },
    externals: {
        pixi: 'PIXI'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [srcPath],
                loader: 'babel?presets[]=es2015'
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({
            title: 'rurple.js',
            alwaysNotify: true
        })
    ]
};

gulp.task('default', ['build']);

gulp.task('build', function (callback) {
    var config = Object.create(webpackConfig);

    webpack(config, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log("[webpack-build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('min', function (callback) {
    var config = Object.create(webpackConfig);
    config.output.filename = 'rurple.min.js';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());

    webpack(config, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log("[webpack-min]", stats.toString({
            colors: true
        }));
        callback();
    });
});
