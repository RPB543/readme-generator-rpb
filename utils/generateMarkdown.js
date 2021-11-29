// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    # Table of Contents:
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License:
    This project is licensed under: 
    ${data.license}

    ### Contribution:
    ${data.contribution}

    ## Tests:


    ## Questions:
    * Github: ${data.username}
    * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
