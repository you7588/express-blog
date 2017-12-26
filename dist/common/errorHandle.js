'use strict';

var errorHandle = function errorHandle(err, next) {
  err.status = 500;
  console.log('=============errorHandle====================');
  next(err);
};

module.exports = errorHandle;
//# sourceMappingURL=errorHandle.js.map