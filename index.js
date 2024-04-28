const inquirer = require('inquirer');
const colors = require('colors');
const {Square, Circle, Triangle, Winged, Hexagon,} = require('./shapes')

const questions = [  {
    type: "input",
    message: `${colors.brightMagenta("What is text on the logo?")}`,
    name: "text",
    validate: function(value) {
      if (value.length < 4) {
        return true;
      } else {
        return 'Please enter 3 or less characters.';
      }
  }},
  {
  type: "input",
  message: `${colors.cyan("What color do you want the text to be?")}`,
  name: "textColor",
  },
  {
    type: "list",
    message: `${colors.brightMagenta("What style do you want the font of the text to be?")}`,
    name: "fontType",
    choices: [`Verdana`, `monospace`, `cursive`, `fantasy`],
    },
  {
  type: "list",
  message: `${colors.cyan("What shape do you want the logo to be?")}`,
  name: "shape",
  choices: [`circle`, `triangle`, `square`, `hexagon`, `winged`],
  },
  {
    type: "input",
    message: `${colors.brightMagenta("What color do you want the background to be?")}`,
    name: "backgroundColor",
    },
    {
      type: "input",
      message: `${colors.cyan("What color do you want the border to be? Leave blank for no border")}`,
      name: "borderColor",
      },
  ];

console.log(`${colors.rainbow("Welcome to LogoGen, please fill out the following questions.")}`)

  inquirer
  .prompt(questions)
  .then((answers) => {
    selectShape(answers);
    newLogo.imagewriter();
  })
  .catch((error) => {
      console.error(error);
  });

  const selectShape = function(answers) {
    const selectedShape = answers.shape;
    
  switch (selectedShape) {
    case 'circle':
      newLogo = new Circle(answers);
      break;
    case 'square':
      newLogo = new Square(answers);
      break;
    case 'triangle':
      newLogo = new Triangle(answers);
      break;
    case 'hexagon':
      newLogo = new Hexagon(answers);
      break;
    case 'winged':
      newLogo = new Winged(answers);
        break;
      default:}
  };