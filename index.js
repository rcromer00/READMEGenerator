const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: ' Give a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe the steps to install your project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide the usage for your project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'If applicable, provide contributors of the project.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'If applicable, provide any tests written for your application.',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Provide your project license.',
        name: 'license'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses}));
        console.log("Success! Your README.md file has been generated.")
    })
};

// function call to initialize program
init();