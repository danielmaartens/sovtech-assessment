const path = require('path');
const SRC = path.resolve(__dirname, 'src/assets/js');
console.log('SRC', SRC);

module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.mp3$/,
        include: SRC,
        loader: 'file-loader?&name=[path][name].[ext]&context=src/assets/sounds/'
    });

    return config;
};