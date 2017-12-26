var errorHandle = function (err, next) {
  err.status = 500;
  console.log('=============errorHandle====================');
  next(err);
}

module.exports = errorHandle;
