const fn = require("./fn");

test("add", () => {
  console.log("제발..");
  expect(fn.add(1, 2)).toBe(3);
});
