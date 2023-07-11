const ora = require("ora");
const spinner = ora().start();

spinner.text = "loading...";

setTimeout(() => {
    spinner.succeed("success!"); // info failed
}, 3000);