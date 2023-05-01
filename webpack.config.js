var path = require('path')
const glob = require('glob');
const fs = require('fs');
var transformer = require('@yugmetaverse/tstransformer/yugtransformer').default;

const entryPoints = () => {
    const entries = {};
    const files = glob.sync(path.resolve(__dirname, './src/*.ts'));
  
    files.forEach((file) => {
      const content = fs.readFileSync(file, 'utf8');
      const regex = /\/\*[\s\S]*?@YugObject[\s\S]*?\*\//;
      const hasYugObject = regex.test(content);
  
      if (hasYugObject) {
        const name = path.basename(file, '.ts');
        entries[name] = file;
      }
    });
  
    return entries;
  };

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: entryPoints(),
    optimization: {
        minimize: false
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: [
                "@babel/env",
                "@babel/react",
                "@babel/preset-typescript"
              ],
            },
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
              getCustomTransformers: (program) => ({
                before: [transformer]
              })
            }
          }
        ]
      },
    externals: {
        "ue": "ue",
        "React": "React",
        "puerts": "puerts",
        "react-umg": "YReactUMG"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
}