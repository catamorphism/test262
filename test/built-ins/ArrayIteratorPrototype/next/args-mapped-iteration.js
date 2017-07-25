// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.4.4.7
esid: sec-%arrayiteratorprototype%.next S22
description: >
    Mapped arguments exotic objects should implement the Array iterator
    protocol.
flags: [noStrict]
---*/

(function(a, b, c) {
  var iterator = arguments[Symbol.iterator]();
  var result;

  result = iterator.next();
  assert.sameValue(result.value, 2, 'First result `value`');
  assert.sameValue(result.done, false, 'First result `done` flag');

  result = iterator.next();
  assert.sameValue(result.value, 1, 'Second result `value`');
  assert.sameValue(result.done, false, 'Second result `done` flag');

  result = iterator.next();
  assert.sameValue(result.value, 3, 'Third result `value`');
  assert.sameValue(result.done, false, 'Third result `done` flag');

  result = iterator.next();
  assert.sameValue(result.value, undefined, 'Exhausted result `value`');
  assert.sameValue(result.done, true, 'Exhausted result `done` flag');
}(2, 1, 3));
