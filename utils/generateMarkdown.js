// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![MIT badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "BSD") {
    return `[![BSD badge](https://img.shields.io/badge/License-BSD--orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  if (license === "GPL") {
    return `[![GPL badge](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === "Apache") {
    return `[![Apache badge](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "") {
    return ""
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(confirmlicense, license) {
//   console.log(confirmlicense, license)
//   if (confirmlicense === false) {
//     return "No license selected"
//   } 
//   else {
//     renderLicenseBadge(license)
//   }
// }

function renderInstallationSection(confirmInstructions, installation) {
  if (confirmInstructions === false) {
    return "No installation instructions given"
  }
  else {
    return installation
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

### Description:
  ${data.description}
    
### Installation:
  ${renderInstallationSection(data.confirmInstructions, data.installation)}

### Usage:
  ${data.usage}

### License:
  This project is licensed under: **${data.license}**

### Contribution
  ${data.contribution}

### Tests:
  ${data.tests}

#### Questions:
  *Please contact me with any questions.*

* Github: [${data.username}](https://github.com/${data.username})
* Email: ${data.email}
    
`;
}

module.exports = generateMarkdown;
