// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT badge](https://img.shields.io/badge/license-MIT-blue)`
  }
}

function renderInstallationSection(confirmInstructions, installation) {
  if (confirmInstructions === false) {
    return "No installation instructions given"
  }
  else {
    return installation
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(confirmLicense, license) {
  if (confirmLicense === false) {
    return "No license selected"
  } 
  else {
    renderLicenseBadge(license)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Installation:
  ${renderInstallationSection(data.confirmInstructions, data.installation)}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under: 
  ${data.license}

  ### Contribution
  ${data.contribution}

  ## Tests


    ## Questions
    * Github: ${data.username}
    * Email: ${data.email}
  # ${data.title}
  
  ${renderLicenseSection(data.confirmlicense, data.license)}

    
`;
}

module.exports = generateMarkdown;
