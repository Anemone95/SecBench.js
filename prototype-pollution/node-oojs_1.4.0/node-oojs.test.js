// https://snyk.io/vuln/SNYK-JS-NODEOOJS-598678
test("prototype pollution in node-oojs", () => {
  expect({}.polluted).toBe(undefined);

  require("node-oojs");
  oojs.setPath(process.env || ({ "__proto__.polluted": "yes" }));

  expect({}.polluted).not.toBe(undefined);
});
