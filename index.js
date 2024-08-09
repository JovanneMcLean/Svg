const fs = require('fs');
const inquirer = require('inquirer');
const SVGGenerator = require('./svgGenerator');

// Inquirer prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text',
    },
    {
      type: 'input',
      name: 'textcolor',
      message: 'Enter the color of the text',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select the shape',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapecolor',
      message: 'Enter the color of the shape',
    },
  ])
  .then((answers) => {
    const { text, textcolor, shape, shapecolor } = answers;
    const svgGenerator = new SVGGenerator(text, textcolor, shape, shapecolor);

    svgGenerator.saveSVG('logo.svg');
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error(error);
  });
