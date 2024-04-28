const fs = require('fs');
const logoFolder = './generated_logos/';

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
      super(answers)
      this.render =  `<circle cx="150" cy="100" r="95" stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}"/>`;
    }}
      Circle.prototype.imagewriter = function () {
        let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${this.render}
        <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`
        fs.writeFileSync(`${logoFolder}${this.text}_logo.svg`, logoDesign);
        console.log(`Generated ${this.text}_logo.svg`)
      
      };

  class Square extends Logo {
    constructor(answers) 
    {super(answers)
        this.render = `<rect width="100" height="100" x="100" y="50" stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}"/>`;
    }}
     Square.prototype.imagewriter = function () {
         let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${this.render}
         <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
          </svg>`
        fs.writeFileSync(`${logoFolder}${this.text}_logo.svg`, logoDesign);
        console.log(`Generated ${this.text}_logo.svg`)
        };
  
  class Triangle extends Logo {
    constructor(answers) 
    {super(answers)
        this.render = `<polygon points="50,50 250,50 150,175" stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}" />`;
    }}
     Triangle.prototype.imagewriter = function () {
         let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${this.render}
         <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
          </svg>`
        fs.writeFileSync(`${logoFolder}${this.text}_logo.svg`, logoDesign);
        console.log(`Generated ${this.text}_logo.svg`)
        };

  class Hexagon extends Logo {
    constructor(answers) 
    {super(answers)
      this.render = `<polygon points="150,10 225,50 225,135 150,175 75,135 75,50" stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}" />`;
    }}
     Hexagon.prototype.imagewriter = function () {
         let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${then.render}
         <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
          </svg>`
        fs.writeFileSync(`${logoFolder}${this.text}_logo.svg`, logoDesign);
        console.log(`Generated ${this.text}_logo.svg`)
        };

  class Winged extends Logo {
    constructor(answers) 
    {super(answers)
        this.render = `<polygon points="60,150 90,125 120,150 150,125 180,150 210,125 240,150 210,25 180,60 150,25 120,60 90,25 " stroke="${this.borderColor}" stroke-width="6" fill="${this.backgroundColor}" />`
    }}
     Winged.prototype.imagewriter = function () {
         let logoDesign = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${then.render}
         <text x="50%" y="50%" font-size="45" font-family="${this.fontType}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
          </svg>`
        fs.writeFileSync(`${logoFolder}${this.text}_logo.svg`, logoDesign);
        console.log(`Generated ${this.text}_logo.svg`)
        };
  
        module.exports = {
            Logo, Square, Circle, Triangle, Winged, Hexagon,
          };
          