// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: Temporal.ZonedDateTime.from({}) throws.
features: [Temporal]
---*/

// Temporal.ZonedDateTime.from(required prop undefined) throws
assert.throws(TypeError, () => Temporal.ZonedDateTime.from({
  year: 1976,
  month: undefined,
  monthCode: undefined,
  day: 18,
  timeZone: "+01:00"
}));

