function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
function dimension(value: number): void {
  finite(value, 1e-6, 1e6);
}
function count(value: number): number {
  if (!Number.isSafeInteger(value) || value < 0)
    throw new RangeError('Count exceeds safe integer resolution');
  return value;
}
export function stitchCount(
  width: number,
  sampleStitches: number,
  sampleWidth: number,
  repeat = 1,
  edgeStitches = 0,
): number {
  dimension(width);
  dimension(sampleWidth);
  integer(sampleStitches, 1, 1e6);
  integer(repeat, 1, 1e6);
  integer(edgeStitches, 0, 1e6);
  const target = width * (sampleStitches / sampleWidth);
  return count(Math.max(0, Math.ceil((target - edgeStitches) / repeat)) * repeat + edgeStitches);
}
export function rowCount(height: number, sampleRows: number, sampleHeight: number): number {
  dimension(height);
  dimension(sampleHeight);
  integer(sampleRows, 1, 1e6);
  return count(Math.ceil(height * (sampleRows / sampleHeight)));
}
