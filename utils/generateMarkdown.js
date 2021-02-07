

function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
   
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#tests)
  * [Questions?](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.tests}

  ## Questions?
  ${data.questions}
  <br/>
  You can Email me at: ${data.email}
  <br/>
  You can contact me on Github at: [${data.username}](https://github.com/${data.username})

  **My ReadMe was generated by [readme-generator](https://github.com/cocobeware83/readme-generator)

  `;
}

module.exports = generateMarkdown;
