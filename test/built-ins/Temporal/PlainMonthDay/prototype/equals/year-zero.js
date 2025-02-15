// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainmonthday.prototype.equals
description: Negative zero, as an extended year, is rejected
features: [Temporal, arrow-function]
---*/

const invalidStrings = [
    "-000000-08",
    "-000000-08-24",
    "-000000-08-24T15:43:27",
    "-000000-08-24T15:43:27+01:00[UTC]"
];
const instance = new Temporal.PlainMonthDay(5, 2);
invalidStrings.forEach((arg) => {
  assert.throws(
    RangeError,
    () => instance.equals(arg),
    "reject minus zero as extended year"
  );
});
