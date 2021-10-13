const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./src/template.js");

const teamMembers = [];
const idArray = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your Team Manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter your employee ID.',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter your email address.',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter your office number.',
        },

    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
};

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your Team Manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter your employee ID.',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter your email address.',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter your office number.',
        },
])
.then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    idArray.push(answers.managerId);
    createTeam();
  });
};


const engineerQuestions = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'engineerName',
           message: "What is your engineer's name?"
       },
       {
           type: 'input',
           name: 'engineerId',
           message: 'Enter their employee ID.',
       },
       {
           type: 'input',
           name: 'engineerEmail',
           message: 'Enter their email address.',
       },
       {
        type: 'input',
        name: 'engineerGithub',
        message: 'Enter their GitHub username.',
        },

    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
};


const internQuestions = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'internName',
           message: "What is your intern's name?"
       },
       {
           type: 'input',
           name: 'internId',
           message: 'Enter their employee ID.',
       },
       {
           type: 'input',
           name: 'internEmail',
           message: 'Enter their email address.',
       },
       {
        type: 'input',
        name: 'internSchool',
        message: 'Enter their school name.',
        },

    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
};


function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I'm all done!"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
            engineerQuestions();
          break;
        case "Intern":
            internQuestions();
          break;
        default:
          buildTeam();
      }
    });
  }

promptUser()


