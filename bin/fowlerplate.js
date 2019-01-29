#! /usr/bin/env node
const shell = require('shelljs')
const yargs = require('yargs')
const chalk = require('chalk')

const createPackageManifest = require('../commands/createPackageManifest')
const installDependencies = require('../commands/installDependencies')
const createEslintConfig = require('../commands/createEslintConfig')
const createGitignoreFile = require('../commands/createGitignoreFile')

const { argv: { _: args } } = yargs
  .demandCommand(1)

const projectName = args[0]

if (shell.test('-d', projectName)) {
  console.log(chalk.yellow(projectName) + chalk.redBright(' directory already exists!'))
  shell.exit(1)
}

shell.mkdir(projectName)
shell.cd(projectName)

createPackageManifest(projectName)
installDependencies()
createEslintConfig()
createGitignoreFile()

shell.touch('Readme.md')
shell.mkdir('config')
shell.touch('config/default.js')
