const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// where the team array will be stored
const team = [];
// const to create the output folder
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//---adding more members to the team.
function teamCreate() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What team member would you like to add",
        choices: ["Engineer", "Intern", "finish creating team."],
      },
    ])
    .then(function (response) {
      if (response.role === "Manager") {
        createTeamManager();
      } else if (response.role === "Engineer") {
        createEngineer();
      } else if (response.role === "Intern") {
        createIntern();
      } else {
        makeTeam();
      }
    });
}
//---creating the manager information.
function createTeamManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team team managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "what is the team managers ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "what is the team managers email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team managers office number?",
      },
    ])
    .then(function (response) {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      team.push(manager);
      teamCreate();
    });
}
//---creating engineer information.
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineers ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineers email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineers github user name?",
      },
    ])
    .then(function (response) {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      team.push(engineer);
      teamCreate();
    });
}
//--Collecting information on the intern team memmber.
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the interns ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the interns email?",
      },
      {
        type: "input",
        name: "schoolName",
        message: "Where did the intern go to school?",
      },
    ])
    .then(function (response) {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.schoolName
      );
      team.push(intern);
      teamCreate();
    });
}
//--Creating HTML based on the information provided by the user.
function makeTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(team), "utf-8");
}

createTeamManager();
