const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const GeneralQuestion = [
    {
        type: "input",
        message: "Enter the ${postion}'s name:",
        name: "name"
    },
    {
        type: "number",
        message: "Enter ${postion}'s ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the ${postion}'s email:",
        name: "email"
    }
]
const NewEployee = [];
function newEployee() {
    const postion = "";
    if (postion === "manage") {
        return inquirer
            .prompt([
                ...GeneralQuestion,
                // {
                //     type: "input",
                //     message: "Enter the manager's name:",
                //     name: "name"
                // },
                // {
                //     type: "number",
                //     message: "Enter the manager's ID:",
                //     name: "id"
                // },
                // {
                //     type: "input",
                //     message: "Enter the manager's email:",
                //     name: "email"
                // },
                {
                    type: "number",
                    message: "Enter the manager's office number:",
                    name: "officeNumber"
                }
            ]).then(function ({ name, id, email, github }) {
                NewEmployee.push(new Manager(name, id, email, github));;
            });

    }
    else if (position === "engineer") {
        return inquirer
            .prompt([
                ...GeneralQuestion,
                // {
                //     type: "input",
                //     message: "Enter the engineer's name:",
                //     name: "name"
                // },
                // {
                //     type: "number",
                //     message: "Enter the engineer's ID:",
                //     name: "id"
                // },
                // {
                //     type: "input",
                //     message: "Enter the engineer's email:",
                //     name: "email"
                // },
                {
                    type: "input",
                    message: "Enter the engineer's github username:",
                    name: "github"
                }
            ]).then(function ({ name, id, email, github }) {
                NewEmployee.push(new Engineer(name, id, email, github));
            });
    }

    else (position === "intern") {
        return inquirer
            .prompt([
                ...GeneralQuestion,
                // {
                //     type: "input",
                //     message: "Enter the intern's name:",
                //     name: "name"
                // },
                // {
                //     type: "number",
                //     message: "Enter the intern's ID:",
                //     name: "id"
                // },
                // {
                //     type: "input",
                //     message: "Enter the intern's email:",
                //     name: "email"
                // },
                {
                    type: "input",
                    message: "Enter the intern's school:",
                    name: "school"
                }
            ]).then(function ({ name, id, email, school }) {
                NewEployee.push(new Intern(name, id, email, school));
            });
    }
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
fs.writeFile(outputPath, NewTeam, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("team.html has been created")
});

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
