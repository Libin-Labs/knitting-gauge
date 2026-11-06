import { stitchCount } from '@lp-labs/knitting-gauge';
if (stitchCount(51, 20, 10, 8, 2) !== 106) throw new Error('Gauge');
// @ts-expect-error invalid argument must be rejected by declarations
stitchCount('51', 20, 10);
