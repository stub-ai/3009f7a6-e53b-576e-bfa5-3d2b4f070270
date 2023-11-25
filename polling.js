function poll(fn, interval) {
  var intervalId = setInterval(function() {
    if(fn()) {
      clearInterval(intervalId);
    }
  }, interval);
}
module.exports = poll;