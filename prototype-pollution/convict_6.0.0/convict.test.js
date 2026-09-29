//https://snyk.io/vuln/SNYK-JS-CONVICT-1062508
test("prototype pollution in node-dig", () => {
  const convict = require("convict");
  let obj = {};
  const config = convict(obj);

  expect({}.polluted).toBe(undefined);

  config.set(process.env.SECBENCH_PAYLOAD || "__proto__.polluted", "yes");
  expect({}.polluted).toBe("yes");
});
