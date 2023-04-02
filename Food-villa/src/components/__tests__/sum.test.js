import { sum } from "../sum";

test("Sum of 2 numbers", () => {
  expect(sum(54, 15)).toBe(69);
  expect(sum(54, 15)).not.toBe(9);
});
