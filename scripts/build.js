const runWebpack = require('./internal/runWebpack');

function build() {
  // process.env.PUBLIC_ROOT_URL = '/';
  // process.env.GENERATE_SOURCEMAP = 'true';
  // process.env.IMAGE_INLINE_SIZE_LIMIT = '1000';
  // process.env.REACT_MICRO_FRONTEND_SHORT = 'rmf';

  runWebpack('production');
}

module.exports = build;
