const download = require("download-git-repo");
const chalk = require("chalk");
const ora = require("ora");

function getGitUrl(url) {
    // return `github:GeniusYYF:nue-cli#master`
    return `direct:${url}#main`; // master
}

function consoleOrder(name) {
    console.log(`${chalk.rgb(200, 200, 200)('\t· cd ' + name)}`);
    console.log(`${chalk.rgb(200, 200, 200)('\t· npm i')}`);
    console.log(`${chalk.rgb(200, 200, 200)('\t· npm run serve')}`);
}

function success(spinner, name) {
    spinner.succeed(chalk.bold(chalk.greenBright("download success!\n"))); // info fail
    consoleOrder(name);
}

function warn(spinner, name, err) {
    spinner.warn(chalk.bold(chalk.yellowBright("download success!\n"))); // info fail
    consoleOrder(name);
    console.warn(chalk.bold(chalk.yellowBright(err.toString()))); // info fail
}

function error(spinner, name, err) {
    spinner.fail(chalk.redBright("download failed!\n"));
    console.log(err);
}

function downloadForUrl(url, name, framework) {
    const spinner = ora().start();
    spinner.text = `正在下载${framework}...`;
    console.log("url:", getGitUrl(url));
    //  { clone: true }, 
    download(getGitUrl(url), name, { clone: true }, err => {
        if (!err) {
            success(spinner, name);
        } else {
            // 错误码为1暂算成功
            if (err.toString().substr(-1) === "1") {
                warn(spinner, name, err);
            } else {
                error(spinner, name, err);
            }
        }
    })
}

module.exports = { downloadForUrl }