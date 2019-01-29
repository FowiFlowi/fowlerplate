const shell = require('shelljs')

const { dependencies, devDependencies } = require('../config')

module.exports = () => {
  if (!shell.which('yarn')) {
    shell.echo('Sorry, this script requires yarn')
    shell.exit(1)
  }

  shell.exec(`yarn add ${dependencies.join(' ')}`)
  shell.exec(`yarn add -D ${devDependencies.join(' ')}`)
}
