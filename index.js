const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
let logoShape;

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

  class Logo {
    constructor(answers) {
      this.text = answers.text;
      this.textColor = answers.textColor;
      this.fontType = answers.fontType;
      this.shape = answers.shape;
      this.backgroundColor = answers.backgroundColor;
      this.borderColor = answers.borderColor;
    }
  }
  class Circle extends Logo {
    constructor(answers) {
      super(answers)}
    }
      Circle.prototype.imagewriter = function () {
        logoShape =  `<circle cx="150" cy="100" r="95" stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}"/>`;
        let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${logoShape}
        <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`
        fs.writeFileSync(`${this.text}logo.svg`, logoDesign);
        console.log(`Generated ${this.text}logo.svg`)
      
      };

  class Square extends Logo {
    constructor(answers) {super(answers)}}
     Square.prototype.imagewriter = function () {
        logoShape =  `<rect width="100" height="100" x="100" y="50" stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}"/>`;
         let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${logoShape}
         <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
          </svg>`
        fs.writeFileSync(`${this.text}logo.svg`, logoDesign);
        console.log(`Generated ${this.text}logo.svg`)
        };
  
  class Triangle extends Logo {
    constructor(answers) {super(answers)}}
     Triangle.prototype.imagewriter = function () {
      logoShape =  `<polygon points="50,50 250,50 150,175" stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}" />`
         let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${logoShape}
         <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
          </svg>`
        fs.writeFileSync(`${this.text}logo.svg`, logoDesign);
        console.log(`Generated ${this.text}logo.svg`)
        };

  class Hexagon extends Logo {
    constructor(answers) {super(answers)}}
     Hexagon.prototype.imagewriter = function () {
      logoShape = `<polygon points="150,10 225,50 225,135 150,175 75,135 75,50" stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}" />`
         let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${logoShape}
         <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
          </svg>`
        fs.writeFileSync(`${this.text}logo.svg`, logoDesign);
        console.log(`Generated ${this.text}logo.svg`)
        };

  class Winged extends Logo {
    constructor(answers) {super(answers)}}
     Winged.prototype.imagewriter = function () {
      logoShape = `<polygon points="60,150 90,125 120,150 150,125 180,150 210,125 240,150 210,25 180,60 150,25 120,60 90,25 " stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}" />`
         let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${logoShape}
         <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
          </svg>`
        fs.writeFileSync(`${this.text}logo.svg`, logoDesign);
        console.log(`Generated ${this.text}logo.svg`)
        };
  


  inquirer
  .prompt(questions)
  .then((answers) => {
    selectShape(answers);
    newLogo.imagewriter();
    console.log(newLogo);
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