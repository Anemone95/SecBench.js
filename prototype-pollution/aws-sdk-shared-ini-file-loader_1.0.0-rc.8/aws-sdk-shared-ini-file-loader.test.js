//https://security.snyk.io/vuln/SNYK-JS-AWSSDKSHAREDINIFILELOADER-1049304
test("prototype pollution in @aws-sdk/shared-ini-file-loader", () => {
  expect({}.polluted).toBe(undefined);
  var fs = require("fs");
  var sharedIniFileLoader = require("@aws-sdk/shared-ini-file-loader");

  var parsed = sharedIniFileLoader.loadSharedConfigFiles({
    filepath: process.env.SECBENCH_PAYLOAD || ("./payload.toml"),
  });
  parsed.then(() => {
    expect({}.polluted).toBe("yes");
  });
});
