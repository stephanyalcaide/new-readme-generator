
// this page is for inquirer

var _ = require("lodash");
var util = require("./utils");
var inquirer = require("./node_modules/inquirer");

var Base = require("inquirer/lib/prompts/base");

class RecursivePrompt extends Base {
  constructor(question, rl, answers) {
    super(question, rl, answers);
    this.question = this.question || question;
    this.responses = [];
  }
// use inquirer in functions
  promptForLoop() {
    inquirer.prompt([{
      type: 'confirm',
      message: this.getQuestion(),
      name: 'addMore'
    }]).then(answers => {
      if (answers.addMore === true) {
        this.promptForAnswers();
      } else {
        this.done(this.responses);
      }
    })
  }

  promptForAnswers() {
    inquirer.prompt(this.question.prompts).then(answers => {
      this.responses.push(answers);
      this.promptForLoop();
    });
  }

  _run(cb) {
    this.done = cb;
    this.render();
    this.promptForLoop();
    return this;
  }

  render() {

    this.screen.render('\b');
  }
}

module.exports = RecursivePrompt;