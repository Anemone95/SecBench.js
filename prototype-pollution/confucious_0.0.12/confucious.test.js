//https://snyk.io/vuln/SNYK-JS-CONFUCIOUS-598665
test("prototype pollution in confucious", () => {
  expect({}.polluted).toBe(undefined);

  const confucious = require("confucious");
  confucious.set(process.env.SECBENCH_PAYLOAD || "__proto__:polluted", "yes");

  expect({}.polluted).toBe("yes");
});
