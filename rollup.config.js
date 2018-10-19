export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundle/polarcape.ngxerrors.umd.js',
    format: 'umd',
    name: 'ngxerrors'
  },
  exports: 'named',
  globals: {
    typescript: 'ts'
  }
};
