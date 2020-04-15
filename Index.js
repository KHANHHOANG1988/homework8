const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/Intern");











function init() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the manager's name:",
                name: "name"
            },
            {
                type: "number",
                message: "Enter the manager's ID:",
                name: "id"
            },
            {
                type: "input",
                message: "Enter the manager's email:",
                name: "email"
            },
                        {
                type: "input",
                message: "Enter the engineer's name:",
                name: "name"
            },
            {
                type: "number",
                message: "Enter the engineer's ID:",
                name: "id"
            },
            {
                type: "input",
                message: "Enter the engineer's email:",
                name: "email"
            },
                        {
                type: "input",
                message: "Enter the intern's name:",
                name: "name"
            },
            {
                type: "number",
                message: "Enter the intern's ID:",
                name: "id"
            },
            {
                type: "input",
                message: "Enter the intern's email:",
                name: "email"
            },
            {
                type: "input",
                message: "Enter the intern's school:",
                name: "school"
            }
            
        ])
}