// inquirer questions
const { default: generateEmptyCoverage } = require('@jest/reporters/build/generateEmptyCoverage');
const inquirer = require('inquirer');
const { choices } = require('yargs');

const promptUser = () => {
    return inquirer.prompt([
     {
        type: 'input',
        name: 'name',
        message: "What is your Team Manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter your employee ID.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your office number.',
    },
    {
        type: 'rawlist',
        name: 'employees',
        message: 'Select the new employee position.',
        choices: ['Engineer', 'Intern', 'Manager'],
        filter(val) {
            return val;
          }
    },
])
.then

}


const engineerQuestions = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'name',
           message: "What is your engineer's name?"
       },
       {
           type: 'input',
           name: 'id',
           message: 'Enter their employee ID.',
       },
       {
           type: 'input',
           name: 'email',
           message: 'Enter their email address.',
       },
       {
        type: 'input',
        name: 'github',
        message: 'Enter their GitHub username.',
        },

    ])
};


const internQuestions = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'name',
           message: "What is your intern's name?"
       },
       {
           type: 'input',
           name: 'id',
           message: 'Enter their employee ID.',
       },
       {
           type: 'input',
           name: 'email',
           message: 'Enter their email address.',
       },
       {
        type: 'input',
        name: 'school',
        message: 'Enter their school name.',
        },

    ])
};


const addEmployee = employeeData => {

}




// promptUser()
// .then(addEmployee)
// .then(employeeData => {
//     return generatePage(employeeData);
// })