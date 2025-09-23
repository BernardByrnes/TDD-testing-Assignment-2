// Fibonacci TDD Assignment Test
// Pair: Bernard Mutambo, Mary Achero

const fibonacci = require("./fibonacci");

test("fibonacci(0) should return 0", () => {
  expect(fibonacci(0)).toBe(0);
});

test("fibonacci(1) should return 1", () => {
  expect(fibonacci(1)).toBe(1);
});

test("fibonacci(2) should return 1", () => {
  expect(fibonacci(2)).toBe(1);
});

test("fibonacci(3) should return 2", () => {
  expect(fibonacci(3)).toBe(2);
});

test("fibonacci(6) should return 8", () => {
  expect(fibonacci(6)).toBe(8);
});
