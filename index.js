module.exports = function(timeout, beforeHook) {
  timeout = timeout || 60 * 60 * 1000;
  beforeHook = beforeHook || function(cb) { cb(); };

  setTimeout(function() {
    beforeHook(process.exit);
  }, timeout * Math.random());
};
