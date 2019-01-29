# Fowlerplate

Boilerplate cli for personal projects

## Usage

```bash
yarn global bin @fowiflowi/fowlerplate
fowlerplate hello-project
```


### package.json

```js
{
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
}
```

### Dependencies list

`config, koa, koa-router, node-env-manager`

### Dev dependencies list

`eslinteslint-config-airbnb-base, eslint-plugin-import, pre-commit`

### Gitignore list

`node_modules`
