const shell = require('shelljs')
const chalk = require('chalk')

const config = require('../config')

module.exports = projectName => {
  const data = {
    name: projectName,
    ...config.packageManifest,
  }
  const json = JSON.stringify(data, null, '\t')
  const file = 'package.json'

  shell.touch(file)

  console.log(chalk.magenta('Package.json:'))
  shell.echo(json).to(file)
}
