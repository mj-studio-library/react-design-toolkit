const path = process.argv[2];

const { exec } = require('child_process');

exec(`chakra-cli tokens ${path}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Execution Error: ${error}`);

    return;
  }

  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
