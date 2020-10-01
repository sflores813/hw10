const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const prompt = [{
    type: "list",
    name: "employee",
    message: "Who are you adding to your team?",
    choices: ["Manager","Engineer", "Intern","finish team setup"]
}];
//manager questions
const mQestions = [{
        type: "input",
        name: "name",
        message: "What is the team mangers name?"
    },
    {
        type: "input",
        name: "email",
        message: "what is the team managers email?"
    },
    {
        type: "input",
        name: "id",
        message: "employee id number?."
    },
    {
        type: "input",
        name: "OfficeNumber",
        message: "what is youre office?."
    }

];

// engineer questions
const eQuestions = [{
    type: "input",
    name: "name",
    message: "What is the engineers name?"
},
{
    type: "input",
    name: "email",
    message: "What is the engineers email?"
},
{
    type: "input",
    name: "id",
    message: "What is the engineers employee ID number?"
},
{
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
}
];

// intern questions

const iQuestions = [{
        type: "input",
        name: "name",
        message: "What is the interns name?"
    },
    {
        type: "input",
        name: "email",
        message: "what is  the intern email?"
    },
    {
        type: "input",
        name: "id",
        message: "interns employee ID number?"
    },
    {
        type: "input",
        name: "school",
        message: "where did the intern graduate college from?"
    }
];


function init() {
    inquirer.prompt(prompt)
        .then(function (data) {
            switch (data.employee) {
                case "Manager":
                    manager()
                    break;
                    case "Engineer":
                        engineer()
                        break;
                case "Intern":
                    intern()
                    break;
                case "Finish team setup":
                    render(team)
                    break;
                }
            });
        }
              

// setting up the manager data
function manager() {
    inquirer.prompt(mQestions)
        .then(function (data) {
            const newManager = new Manager(data.name, data.email, data.id, data.OfficeNumber)
            team.push(newManager)
            init()
        })
}
// setting up engineer data
function engineer() {
    inquirer.prompt(eQuestions)
        .then(function (data) {
            const newEngineer = new Engineer(data.name, data.email, data.id, data.github)
            team.push(newEngineer)
            init()
        })
}
// setting up intern data
function intern() {
    inquirer.prompt(iQuestions)
        .then(function (data) {
            const newIntern = new Intern(data.name, data.email, data.id, data.school)
            team.push(newIntern)
            init()
        })
}
init();



