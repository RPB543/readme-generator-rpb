// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                return 'Please enter your project name!';
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project.',
        validate: value => {
            if (value) {
                return true;
            } else {
                return 'Please enter your project description!';
            }
        }
    },
    {
        type: 'confirm',
        name: 'installationinstructions',
        message: 'Would you like to provide installation instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
        when: ({installationinstructions}) => {
            if (installationinstructions) {
                return true;
            } else {
                return 'Please enter your installation instructions!';
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
        validate: value => {
            if (value) {
                return true;
            } else {
                return 'Please enter your usage information!';
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide the contribution guidelines for your project.',
        validate: value => {
            if (value) {
                return true;
            } else {
                return 'Please enter your guidelines!';
            }
        }
    },
    {   
        type: 'input',
        name: 'test',
        message: 'Please provide the test instructions for your project.',
        validate: value => {
            if (value) {
                return true;
            } else {
                return 'Please enter your test instructions!';
            }
        }
    },
    {   
        type: 'list',
        name: 'license',
        message: 'Please select the license used in the application.',
        choices: ["MIT", "GPL", "BSD", "Apache", "N/A"],
        validate: value => {
            if (value) {
                return true;
            } else {
                return 'Please select one!';
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: value => {
            if (value) {
                return true;
            } else {
                return 'Please enter your username!';
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: value => {
            if (value) {
                return true;
            } else {
                return 'Please enter your email!';
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(success));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();