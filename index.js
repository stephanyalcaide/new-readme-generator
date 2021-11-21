// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
const inquirer = require('./node_modules/inquirer');
inquirer.registerPrompt('recursive', require('./utils/myinquirer'));
const generateMarkdown = require('./utils/generateMarkdown.js');
const chalk = require('./node_modules/chalk');

const greeting = [
    {
        type: 'confirm',
        prefix: '\b',
        name: 'greeting',
        message: chalk.cyanBright(`this read.me generator will help you create a professional read.me. To start hit 'y' or enter.`),

    },
];

// chalk is being called with letsStart
const letsStart = chalk.greenBright(`\n
let start a read me together

Bold    **bold text**
Italics *italicized text*       
Links   [title](https://www.example.com)
Image   ![alt text](image.jpg)
\n`);

//Success message
const success = chalk.greenBright(`
yay you made generated a read.me with us hope you use it.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
`);



// TODO: Create a function to write README file
function writeToFile (answers) {
    return `# ${answers.project_title}
          
  #### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Code of conduct](#code-of-conduct)
  6. [Test Instructions](#test-instructions)
  7. [License](#license)
  8. [Questions](#questions)
  ## Project Description
  * ${answers.description}
  ## Installation Instructions
  * ${answers.install}
  ## Usage Information
  * ${answers.use}
  ## Contributor Guidelines
  * ${answers.contributions}
  ## Code of Conduct
  * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
  ## Test Instructions
  * ${answers.test}
  ## License
  * licensed under the ${answers.license}
  ## Questions
  *  Please reach out to ${answers.email}
  * Remember me at: [${answers.github}](http://github.com/${answers.github})`;
    
  }
  
  promptUser()
    .then(function(answers) {
      const readme = writeToFile(answers);
  
   
      return writeFileAsync("README.md", readme);
    })
    .then(function() {
      console.log(" your professional Read.me was formed yay! ");
    })
    .catch(function(err) {
      console.log(err);
    });

// TODO: Create a function to initialize app
// called inquirer 

function promptUser() {
}

// Function call to initialize app
function promptUser() {
    
    return inquirer.prompt([
        {
            type: "input",
            name: "project-title",
            message: "what is the title of your project"
          },
          {
            type: "input",
            name: "description",
            message: "please let us know what you project is about"
          },
          {
            type: "input",
            name: "install",
            message: "Are there any installations required?"
          },
          {
            type: "input",
            name: "use",
            message: "What is the application used for"
          },

          {
            type: "input",
            name: "test",
            message: "Please provide test instructions if"
          },
          {
            type: "checkbox",
            message: "would you like a License?",
            name: "license",
            choices: [
              "[MIT License](LICENSE.txt)", 
              "[GNU GPLv3 License](COPYING.txt)", 
            ]
          },
          {
            type: "input",
            name: "email",
            message: "please enter your email down below",
          },
          {
            type: "input",
            name: "github",
            message: "please enter your github username down below"
          }
        ]);
      }
      const init = async () => {
        try {
            await inquirer.prompt(greeting);
            console.log(letsStart);
            const data = await inquirer.prompt(questions);
            writeToFile('./output/README.md', generateMarkdown(data));
        } catch (err) {
            console.log(err);
        }
    }
    
    //Function call to initialize program
    init();
    