// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## USERNAME

  ${data.username}

  ## REPOSITORY

  ${data.repo}

  ## EMAIL

  ${data.email}

  ## TITLE

  ${data.title}

  ## DESCRIPTION

  ${data.description}

  ## INSTALLATION

  ${data.install}

  ## USAGE

  ${data.usage}

  ## CONTRIBUTION

  ${data.contribution}

  ## LICENSE

  ${data.license}
`;
}

module.exports = generateMarkdown;

