const fs = require('fs')
const shell = require('shelljs')
const chalk = require('chalk')

module.exports = () => {
  const config = fs.readFileSync(`${__dirname}/../.eslintrc`, 'utf-8')
  const file = '.eslintrc'

  shell.touch(file)

  console.log(chalk.magenta('.eslintrc:'))
  shell.echo(config).to(file)
}
