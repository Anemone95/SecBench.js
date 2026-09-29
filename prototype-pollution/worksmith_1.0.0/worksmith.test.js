//https://snyk.io/vuln/SNYK-JS-WORKSMITH-598798

test("prototype pollution in worksmith", () => {
  const worksmith = require("worksmith");
  obj = {};

  expect({}.polluted).toBe(undefined);

  worksmith.setValue({}, process.env.SECBENCH_PAYLOAD || "__proto__.polluted", "yes");
  expect({}.polluted).toBe("yes");
});
