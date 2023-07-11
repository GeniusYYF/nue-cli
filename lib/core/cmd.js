const action = require("./action");

module.exports = function (program) {
    program.command("create <project> [other...]").alias("crt").description("创建项目").action(action)
}