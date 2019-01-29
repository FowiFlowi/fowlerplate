module.exports = {
  packageManifest: {
    version: '1.0.0',
    description: '',
    main: 'src/index.js',
    repository: '',
    author: 'fowiflowi',
    license: 'MIT',
    scripts: {
      start: 'node src',
      dev: 'nodemon src',
      test: 'eslint .',
    },
    'pre-commit': ['test'],
  },
  dependencies: ['config', 'koa', 'koa-router', 'node-env-manager'],
  devDependencies: ['eslint', 'eslint-config-airbnb-base', 'eslint-plugin-import', 'pre-commit'],
  gitignore: ['node_modules'],
}
