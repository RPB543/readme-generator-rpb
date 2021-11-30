// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        name: 'confirmInstructions',
        message: 'Would you like to provide installation instructions?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
        when: ({ confirmInstructions }) => {
            if (confirmInstructions) {
                return true;
            } else {
                return false;
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
        name: 'tests',
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
        type: 'confirm',
        name: 'confirmlicense',
        message: 'Would you to select a license used?',
    },
    {   
        type: 'list',
        name: 'license',
        message: 'Please select the license used in the application.',
        choices: ["MIT", "GPL", "BSD", "Apache"],
        when: ({confirmLicense}) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
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
            const pass = value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
            if(pass) {
                return true;
            }
            return "Please enter a valid email."
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,fileName), data)
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        console.log(data);
        writeToFile('README.md', generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
