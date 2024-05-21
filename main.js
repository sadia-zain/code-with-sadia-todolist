#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;
console.log(chalk.yellowBright.bold("\nWelcome code with sadia. Todo lists Application"));
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "new",
            type: "input",
            message: "Enter your new task",
        }
    ]);
    todolist.push(addtask.new);
    console.log(`${addtask.new} Task list is updated successfully`);
    let answer = await inquirer.prompt([
        {
            name: "add",
            type: "confirm",
            message: " would you like to enter more tasks?",
            default: "false",
        }
    ]);
    condition = answer.add;
}
console.log("your todo list updated with", todolist);
