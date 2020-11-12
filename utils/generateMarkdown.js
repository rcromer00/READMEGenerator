// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [Contributing] (#contributing)
  * [Tests] (#test)
  * [License] (#license)
  * [Questions] (#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.test}
## License
This application is covered by the ${data.license} license.
## Questions
If you have any questions about this application please feel free to contact me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
