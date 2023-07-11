#!/usr/bin/env node
// 第一行要求使用node环境 npm link时必不可少
console.clear(); // 清屏
const chalk = require("chalk");

console.log(`\n========================== ${chalk.yellow("nue-cli")} ============================= ${chalk.yellowBright('★ ★ ★ ★')} ${chalk.yellow('☆')}\n`)

const { program } = require("commander");
const help = require("../lib/core/help");
const cmd = require("../lib/core/cmd");

help(program);
cmd(program);

program.parse(process.argv); // program.prase是将你传过去的所有命令行参数进行了解析，都可以通过--help来进行查看
