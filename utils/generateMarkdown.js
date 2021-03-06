
//function to call user input into README template
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ![Screenshot (29)](https://user-images.githubusercontent.com/72768374/107133328-9cd80b00-68ac-11eb-969b-d12719451cb1.png)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#tests)
  * [Questions?](#questions)
  * Application in Action
  
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

  ## Application in Action
  <iframe width="560" height="315" src="https://www.youtube.com/embed/IydFPuxoR60" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  

  `;
}

module.exports = generateMarkdown;
