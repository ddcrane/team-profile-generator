// inquirer questions
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

let employeeData = [];

const promptUser = () => {
    return inquirer.prompt([
    
    {
        type: 'rawlist',
        name: 'employees',
        message: 'Select the new employee position.',
        choices: ['Engineer', 'Intern', 'Manager'],
        
    },
])
};

const managerQuestions = () => {
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
])
};


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




promptUser()
.then(prompts => {
    console.log(prompts);
    // const data = new Manager (prompts.name, prompts.id, prompts.email, prompts.office) etc
})



// .then(employeeData => {
//     return generatePage(employeeData);
// })

