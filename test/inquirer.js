const inquirer = require("inquirer");

inquirer.prompt(
    [
        {
            type: "input", // 类型
            name: "username", // 标识
            message: "你的名字", // 描述
        }
    ]
).then(function (answer) {
    console.log(answer);
})