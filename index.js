var webpack = require('webpack');
var WriteFilePlugin = require('write-file-webpack-plugin');

// helper function to resolve object properties
function resolveProperty(obj, path) {
    return path.split('.').reduce(function(p, k) {
        return p && p[k];
    }, obj);
}

module.exports = function(api, options) {
    var pluginOptions = resolveProperty(options, 'pluginOptions.writeFile') || {};

    api.configureWebpack(function(config) {
        return {
            plugins: [
                new WriteFilePlugin(pluginOptions),
            ],
        };
    });
};
