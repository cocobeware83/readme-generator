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
            // validate that an answer has been provided
            validate: (value)=>{if(value){return true} else {return 'please provide a valid response to continue'}},
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your project: ",
            validate: (value)=>{if(value){return true} else {return 'please provide a valid response to continue'}},
        {
            type: "input",
            name: "installation",
            message: "Please describe the installation process: ",
            validate: (value)=>{if(value){return true} else {return 'please provide a valid response to continue'}},
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?",
            validate: (value)=>{if(value){return true} else {return 'please provide a valid response to continue'}},
        {
            type: "list",
            name: "license",
            message: "Please choose the license that is applicable for this project: ",
            choices: ["Apache","ISC","MIT","Mozilla","GNU"],
            validate: (value)=>{if(value){return true} else {return 'please provide a valid response to continue'}},
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this project?",
            validate: (value)=>{if(value){return true} else {return 'please provide a valid response to continue'}},
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?",
            validate: (value)=>{if(value){return true} else {return 'please provide a valid response to continue'}},
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: ",
            validate: (value)=>{if(value){return true} else {return 'please provide a valid response to continue'}},
        {
            type: "input",
            name: "email",
            message: "Please enter your email address: ",
            validate: (value)=>{if(value){return true} else {return 'please provide a valid response to continue'}},

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