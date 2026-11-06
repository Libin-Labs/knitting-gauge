# @lp-labs/knitting-gauge

Gauge-based row and pattern-repeat stitch counts.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/knitting-gauge
```

## Working example

```js
import { stitchCount } from '@lp-labs/knitting-gauge';
if (stitchCount(51, 20, 10, 8, 2) !== 106) throw new Error('Gauge');
```

CommonJS: `const api = require('@lp-labs/knitting-gauge')`.

## Behavior, customization and limits

stitchCount(width,sampleStitches,sampleWidth,repeat=1,edgeStitches=0) rounds target gauge count UP to edgeStitches plus a nonnegative multiple of repeat. rowCount(height,sampleRows,sampleHeight) rounds up rows. Lengths in same unit[1e-6,1e6],sample counts/repeat integers1..1e6,edges0..1e6; unsafe counts throw. Constant time. Estimates ignore stretch,blocking,shaping and designer-specific repeats.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function stitchCount(
  width: number,
  sampleStitches: number,
  sampleWidth: number,
  repeat?: number,
  edgeStitches?: number,
): number;
export declare function rowCount(height: number, sampleRows: number, sampleHeight: number): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
