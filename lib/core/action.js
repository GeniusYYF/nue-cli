const inquirer = require("inquirer");
const { url, prompts } = require("../../config");
const { downloadForUrl } = require("./download");

module.exports = async function (project, args) {
    // console.log(project, args);
    var answer = await inquirer.prompt(prompts);
    // console.log(answer);
    if (answer.framework === "nue-cli") {
        downloadForUrl(url.git, project, answer.framework)
    } else if (answer.framework === "quit") {
        console.log("quit...")
    }
}