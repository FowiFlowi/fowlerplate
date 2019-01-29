const shell = require('shelljs')
const chalk = require('chalk')

const { gitignore } = require('../config')

module.exports = () => {
  const file = '.gitignore'
  shell.touch(file)

  console.log(chalk.magenta('.gitignore:'))
  shell.echo(gitignore.join('\n')).to(file)
}
