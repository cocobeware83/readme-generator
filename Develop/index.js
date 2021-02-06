// Required Packages/Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

// Write Array of Questions

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is this project's title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe the installation process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?"
        },
        {
            type: "list",
            name: "license",
            message: "Please choose the license that is applicable for this project: ",
            choices: [
                "Apache",
                "ISC",
                "MIT",
                "Mozilla",
                "GNU",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address: "
        }
    ]);
} 


async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        
        // Write README
        await writeFileAsync('./dist/README.md', generateContent);
    }   
    catch(err) {
    }
  }
  
  init();  