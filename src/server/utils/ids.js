const nodeCrypto = require('node:crypto');

const generateId = (size = 777) => {
  return nodeCrypto
    .randomBytes(Math.ceil(size / 2))
    .toString('hex')
    .slize(0, size);
};

module.exports = { generateId };
