const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

const questions = [  {
    type: "input",
    message: `${colors.brightMagenta("What is text on the logo?")}`,
    name: "text",
  },
  {
  type: "input",
  message: `${colors.brightMagenta("What color do you want the text to be?")}`,
  name: "textColor",
  },
  {
    type: "list",
    message: `${colors.brightMagenta("What color do you want the text to be?")}`,
    name: "fontType",
    choices: [`Verdana`, `monospace`, `cursive`, `fantasy`],
    },
  {
  type: "list",
  message: `${colors.brightMagenta("What shape do you want the logo to be?")}`,
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
      message: `${colors.brightMagenta("What color do you want the border to be? Leave blank for no border")}`,
      name: "borderColor",
      },
  ];
  let logoShape;

  const formatshape = function(answers) {
    const selectedShape = answers.shape;
    
  switch (selectedShape) {
    case 'circle':
        logoShape =  `<circle cx="150" cy="100" r="95" stroke="${answers.borderColor}" stroke-width="6" fill="${answers.backgroundColor}"/>`;
      break;
    case 'square':
      logoShape =  `<rect width="100" height="100" x="100" y="50" stroke="${answers.borderColor}" stroke-width="6" fill="${answers.backgroundColor}"/>`;
      break;
    case 'triangle':
      logoShape =  `<polygon points="50,50 250,50 150,175" stroke="${answers.borderColor}" stroke-width="6" fill="${answers.backgroundColor}" />`
      break;
    case 'hexagon':
      logoShape = `<polygon points="150,10 225,50 225,135 150,175 75,135 75,50" stroke="${answers.borderColor}" stroke-width="6" fill="${answers.backgroundColor}" />`
      break;
    case 'winged':
      logoShape = `<polygon points="60,150 90,125 120,150 150,125 180,150 210,125 240,150 210,25 180,60 150,25 120,60 90,25 " stroke="${answers.borderColor}" stroke-width="6" fill="${answers.backgroundColor}" />`
        break;
      default:}
  };

  const imagewriter = function(answers) {
    let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${logoShape}
    <text x="50%" y="50%" font-size="45" font-family="${answers.fontType}" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle">${answers.text}</text>
    </svg>`
    fs.writeFileSync(`${answers.text}logo.svg`, logoDesign);
    console.log(`Generated ${answers.text}logo.svg`)
  }

  inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
      formatshape(answers);
      imagewriter(answers);
  })
  .catch((error) => {
      console.error(error);
  });
