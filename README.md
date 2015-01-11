# Scimmia

`require` the Chaos Monkey into your code.
Credits to http://youtu.be/1CNcXeW8HdQ

## Usage

`require('scimmia')` in your code, when the monkey wakes up your process will exit.

```javascript
require('scimmia');

var count = 0;
function loop() {
  console.log('I looped ' + ++count + ' times');
  setTimeout(loop, 200);
}

loop();
```

## Configuration

Scimmia could be configured to accept a timeout in milliseconds, otherwise it will wake up
randomly (at max in 1 hour). In this example it will wake up at max in 3 seconds.

```javascript
require('scimmia')(3000);

var count = 0;
function loop() {
  console.log('I looped ' + ++count + ' times');
  setTimeout(loop, 200);
}

loop();
```

Scimmia could be configured to accept a timeout and a callback, which will be called just before
the monkey wakes up. Remember to call `exit`! This can probably change in the future so you don't
have to worry.

```javascript
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
```
