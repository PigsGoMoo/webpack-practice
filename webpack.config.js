module.exports = {
  mode: 'development', // Tells webpack to use built-in optimizations
  entry: './src/index.js', //Where it looks for the file to bundle
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
};
