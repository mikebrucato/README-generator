const inquirer = require('inquirer')
const fs = require('fs')
const generate = require('./generateMarkdown')
const util = require('util')



// array of questions for user
const questions = [
    inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            messege: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'repo',
            messege: 'What is the name of your Github repository?'
        },
        {
            type: 'input',
            name: 'email',
            messege: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            messege: 'What is the name of your application?'
        },
        {
            type: 'input',
            name: 'description',
            messege: 'What is the description of your application?'
        },
        {
            type: 'input',
            name: 'install',
            messege: 'Write the steps to install this application'
        },
        {
            type: 'input',
            name: 'usage',
            messege: 'Provide examples of use for your application'
        },
        {
            type: 'input',
            name: 'contribution',
            messege: 'What are the guidelines other developers can follow to contribute to your application?'
        },
        {
            type: 'checkbox',
            name: 'license',
            messege: 'Choose a license for your application',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        }


    ])
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile("README.md", generate(fileName, data), function(err) {

        console.log("New README file created with success!");
      });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
