[![Build Status](https://api.travis-ci.org/qjacquet/user-microservice-node.svg?branch=master)](https://travis-ci.org/qjacquet/user-microservice-node)
[![codecov](https://codecov.io/gh/qjacquet/user-microservice-node/branch/master/graph/badge.svg)](https://codecov.io/gh/qjacquet/user-microservice-node)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
# User microservice - Node 

### Additional Dependencies
* [TravisCI](http://travis-ci.org) Continuous Integration
* [CodeCov.io](http://codecov.io) Code Coverage
* [Semantic Release](https://github.com/semantic-release/semantic-release) Package Publishing
* [Commitizen](https://github.com/commitizen/cz-cli) Preferred format for git commits

### Installation
```
git clone https://github.com/qjacquet/user-microservice-node.git
npm install
npm start
```

### Commiting
```
npm run commit
```
Select the type of change that you're commiting and push your code back to the repo like you'd normally do:
[More info here](https://www.npmjs.com/package/commitizen)

### Test (this happens automatically with TravisCI)
<span style="color:red">**Important: Make sure mongoDB is running locally before running tests.**</span>  

```
npm test

```