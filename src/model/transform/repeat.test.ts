import { mk } from '../BeatCode'
import { repeat } from './repeat'

const bc = mk([{at: 0, code: 0}, {at: 1, code: 2}, {at: 2, code: 4}], 3);

test('repeat', () => {
  expect(repeat(2)(bc)).toEqual(mk([
    {at: 0, code: 0}, {at: 1, code: 2}, {at: 2, code: 4},
    {at: 3, code: 0}, {at: 4, code: 2}, {at: 5, code: 4}
], 6))
});
