const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

class SVGGenerator {
  constructor(text, textColor, shapeType, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = this.createShape(shapeType, shapeColor);
  }

  createShape(type, color) {
    switch (type.toLowerCase()) {
      case 'triangle':
        return new Triangle(color);
      case 'circle':
        return new Circle(color);
      case 'square':
        return new Square(color);
      default:
        throw new Error('Invalid shape type.');
    }
  }

  generateSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              ${this.shape.render()}
              <text x="150" y="150" font-size="40" text-anchor="middle" fill="${this.textColor}">
                ${this.text}
              </text>
            </svg>`;
  }

  saveSVG(fileName) {
    const svgContent = this.generateSVG();
    fs.writeFileSync(fileName, svgContent, 'utf8');
  }
}

module.exports = SVGGenerator;
