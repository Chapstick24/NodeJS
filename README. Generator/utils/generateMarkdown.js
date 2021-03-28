// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  return ![MIT]("https://img.shields.io/badge/license-MIT-brightgreen")

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}\n\n\n` +
  `\n # Description\n` +
   ` ${answers.decription}\n\n`+
   `\n\n# Table of contents\n`+
   `\n${answers.licenses}\n` +
   `\n${answers.usage}\n`+
   `\n${answers.installation}\n`+
   `\n\n # Licenses\n`+
   `\n ${answers.licenses}\n`+
   `\n\n# Contact Info\n` + 
   `\n ${answers.email}\n`+
   `\n ${answers.github}\n`+
   `\n ${answers.phone}\n`+
   `\n# Questions\n`+
   `\n ${answers.githuba}`


  }

module.exports = generateMarkdown;
