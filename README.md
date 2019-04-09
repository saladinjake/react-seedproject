# BADGES

[![CircleCI](https://circleci.com/gh/saladinjake/react-seedproject.svg?style=svg)](https://circleci.com/gh/saladinjake/react-seedproject)
[![Build Status](https://travis-ci.com/saladinjake/react-seedproject.svg?branch=master)](https://travis-ci.com/saladinjake/react-seedproject)
[![Coverage Status](https://coveralls.io/repos/github/saladinjake/react-seedproject/badge.svg?branch=master)](https://coveralls.io/github/saladinjake/react-seedproject?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/9645da548188cfadbd1a/maintainability)](https://codeclimate.com/github/saladinjake/react-seedproject/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9645da548188cfadbd1a/test_coverage)](https://codeclimate.com/github/saladinjake/react-seedproject/test_coverage)

# Documentation

Webapp Was Built In:

 * ReactJS
 * Redux
 * Webpack 4 
 * Babel 7
 * React Material UI
 * Bootstrap 4 
 * SCSS, CSS Support
 * HMR
 * Code Splitting with <b>React.lazy</b> & <b>React.Suspense</b>
 * Code Formatter (Prettier)
 * Eslint configured extended with Airbnb style guide & support for prettier
 * Jest & Enzyme Configured
 * Automatically lint & format code, when committing it. [Husky/Lint-Staged]





### Deploying a Node Instance On Linux Server Using PM2

 How to start on PM2 [This is specific if you serve your files on a linux server where a NodeJS application is deployed as a server serving the .js files

```
 npm i
 node_modules/.bin/webpack --config webpack.prod.config.js --colors --progress
 node server
 PORT=8082 pm2 start server --name "app-name-to-deploy"
```