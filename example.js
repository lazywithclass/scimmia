// simulates a long running job
// that gets interrupted after ~3"

require('./index')(3000, function(exit) {
  console.log('I\'m about to exit!');
  exit();
});

var count = 0;
function loop() {
  console.log('I looped ' + ++count + ' times');
  setTimeout(loop, 200);
}

loop();
