module.exports = {
    url: {
        git: "https://github.com/GeniusYYF/nue-cli-template.git",
    },
    prompts: [
        {
            type: "list", // 类型
            name: "framework", // 标识
            choices: ["nue-cli", "quit"],
            message: "选择你要创建的框架", // 描述
        }
    ]
} 