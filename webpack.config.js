module.exports = {

    //define entry point
    entry: './src/script1.js',

    //define output point
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            query: {
                presets: ['es2015']
            }
          },
          {
            test: /\.css$/,
            loader:'style-loader!css-loader'
          }
        ]
    }
};
