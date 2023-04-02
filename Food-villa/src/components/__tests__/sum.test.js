import { sum } from "../sum";

/***
 * Install react testing library
 * install jest
 * configure jest ny npx jest --init
 * install jst environment jsdom
 * create test unde __tests__ folder   ----any files in that folder,jest will consider them test files
 * configure babel for jest so it understands yr import
 * run test by npm run test
 */

test("Sum of 2 numbers", () => {
  expect(sum(54, 15)).toBe(69);
  expect(sum(54, 15)).not.toBe(9);
});
