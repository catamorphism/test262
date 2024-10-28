// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.since
description: Test different rounding increments.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const earlier = Temporal.Instant.from("1976-11-18T15:23:30.123456789Z");
const later = Temporal.Instant.from("2019-10-29T10:46:38.271986102Z");
const largestUnit = "hours";

// rounds to an increment of hours
TemporalHelpers.assertDurationsEqual(later.since(earlier, {
  largestUnit,
  smallestUnit: "hours",
  roundingIncrement: 3,
  roundingMode: "halfExpand"
}), new Temporal.Duration(0, 0, 0, 0, 376434, 0, 0, 0, 0, 0));

// rounds to an increment of minutes
TemporalHelpers.assertDurationsEqual(later.since(earlier, {
  largestUnit,
  smallestUnit: "minutes",
  roundingIncrement: 30,
  roundingMode: "halfExpand"
}), new Temporal.Duration(0, 0, 0, 0, 376435, 30, 0, 0, 0, 0));

// rounds to an increment of seconds
TemporalHelpers.assertDurationsEqual(later.since(earlier, {
  largestUnit,
  smallestUnit: "seconds",
  roundingIncrement: 15,
  roundingMode: "halfExpand"
}), new Temporal.Duration(0, 0, 0, 0, 376435, 23, 15, 0, 0, 0));

// rounds to an increment of milliseconds
TemporalHelpers.assertDurationsEqual(later.since(earlier, {
  largestUnit,
  smallestUnit: "milliseconds",
  roundingIncrement: 10,
  roundingMode: "halfExpand"
}), new Temporal.Duration(0, 0, 0, 0, 376435, 23, 8, 150, 0, 0));

// rounds to an increment of microseconds
TemporalHelpers.assertDurationsEqual(later.since(earlier, {
  largestUnit,
  smallestUnit: "microseconds",
  roundingIncrement: 10,
  roundingMode: "halfExpand"
}), new Temporal.Duration(0, 0, 0, 0, 376435, 23, 8, 148, 530, 0));

// rounds to an increment of nanoseconds
TemporalHelpers.assertDurationsEqual(later.since(earlier, {
  largestUnit,
  smallestUnit: "nanoseconds",
  roundingIncrement: 10,
  roundingMode: "halfExpand"
}), new Temporal.Duration(0, 0, 0, 0, 376435, 23, 8, 148, 529, 310));

