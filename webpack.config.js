const { getBaseOptions, getDevOptions } = require('./scripts/buildOptions');

const config = (_, argv) => ({ ...getBaseOptions(), ...getDevOptions(argv) });

module.exports = config;
