var path = require('path');

module.exports = {
    mode: 'development', 
    entry: "./App/Controller/main.ts",
    devtool: 'source-map',
    module:{
        rules:[
            {
                test: /\.ts$/,
                use:{
                    loader: "ts-loader",
                }
            }
        ]
    },
    resolve: {
        extensions:['.tsx','.ts','.js']
    },
    watch: true,
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
    }
  }