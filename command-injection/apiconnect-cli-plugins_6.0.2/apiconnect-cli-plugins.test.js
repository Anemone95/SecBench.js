test("Command Injection in apiconnect-cli-plugins", () => {
  expect.assertions(2);
  const root = require("apiconnect-cli-plugins");
  const fs = require("fs");
  const path = "./apiconnect-cli-plugins";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  let payload = process.env.SECBENCH_PAYLOAD || ("& touch apiconnect-cli-plugins &");
  return root.pluginLoader.installPlugin(payload, "").catch(() => {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {});
  });
});
