const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

let employeeData = [];

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
            name: 'type',
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





promptUser()
.then(prompts => {
    console.log(prompts);
    
    if (prompts.type === 'Engineer') {
        return engineerQuestions();
    } 
    if (prompts.type === 'Intern') {
        return internQuestions();
    } 
    if (prompts.type === 'Manager') {
        return managerQuestions();
    } 
})



// .then(employeeData => {
//     return generatePage(employeeData);
// })

