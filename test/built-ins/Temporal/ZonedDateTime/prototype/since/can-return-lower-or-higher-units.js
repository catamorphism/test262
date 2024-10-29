// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: Can return lower or higher units.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

/*
const feb20 = Temporal.ZonedDateTime.from("2020-02-01T00:00+01:00[+01:00]");
const feb21 = Temporal.ZonedDateTime.from("2021-02-01T00:00+01:00[+01:00]");
*/
const feb20 = new Temporal.ZonedDateTime(1580511600000000000n, "+01:00");
const feb21 = new Temporal.ZonedDateTime(1612134000000000000n, "+01:00");

TemporalHelpers.assertDurationsEqual(feb21.since(feb20, { largestUnit: "years" }),
                                     new Temporal.Duration(1, 0, 0, 0, 0, 0, 0, 0, 0, 0));
TemporalHelpers.assertDurationsEqual(feb21.since(feb20, { largestUnit: "months" }),
                                     new Temporal.Duration(0, 12, 0, 0, 0, 0, 0, 0, 0, 0));
TemporalHelpers.assertDurationsEqual(feb21.since(feb20, { largestUnit: "weeks" }),
                                     new Temporal.Duration(0, 0, 52, 2, 0, 0, 0, 0, 0, 0));
TemporalHelpers.assertDurationsEqual(feb21.since(feb20, { largestUnit: "days" }),
                                     new Temporal.Duration(0, 0, 0, 366, 0, 0, 0, 0, 0, 0));
TemporalHelpers.assertDurationsEqual(feb21.since(feb20, { largestUnit: "minutes" }),
                                     new Temporal.Duration(0, 0, 0, 0, 0, 527040, 0, 0, 0, 0));
TemporalHelpers.assertDurationsEqual(feb21.since(feb20, { largestUnit: "seconds" }),
                                     new Temporal.Duration(0, 0, 0, 0, 0, 0, 31622400, 0, 0, 0));
