// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const genterateMarkup = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "what's the title of your project",
    name: "title",
},
{
    type: "input",
    message: 'Please give a breif description',
    name: 'decription',

},
{
    type: "input",
    message: 'please provide a table Table of Contents',
    name: "table of contents"

},
{
    type: 'input',
    message: "question about installation",
    name: 'installation'
},
{
    type: 'input',
    message: "What would this app be used for",
    name: "usage",
},
{
    type: "list",
    message: 'list the licenses you are using',
    name: 'licenses',
    choices: [
        'mit',
        'Apple',
        'telsa',
        'intel',
    ]
},
{
    type: "input",
    message: "please provide your GIThub user name",
    name: "github",

},
{
    type: 'input',
    message: "Enter your email here",
    name: "email"
},
{
    type: 'input',
    message: 'phone number please',
    name: 'phone',
},
{
    type: 'list',
    message: 'github account',
    name: 'githuba',
    choices:[
        "https://github.com/Chapstick24"
    ]
}
];

inquirer.prompt(questions)
    .then(answers =>{
        console.log(answers.usage)
        
      
        let readstring= genterateMarkup(answers)
        
        
        writeToFile("README.md", readstring)
    })
    .catch(error =>{
        console.log(error)
    })
// TODO: Create a function to write README file

 function writeToFile(fileName, data) {
     console.log(data)
    fs.writeFile(fileName, data,(err) =>
    err ? console.log(err) : console.log('you did it'))
 }




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
