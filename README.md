# learning-code-coverage

Companion code repo for a blog post series:

- [Post 1](https://medium.com/engineering-semantics3/understanding-code-coverage-1074e8fccce0)
- [Post 2](https://medium.com/engineering-semantics3/understanding-javascript-code-coverage-part-2-9aedaa5119e5)

## Setup

```shell
$ yarn global add typescript@2
$ git clone git@github.com:amarnus/learning-code-coverage.git
$ cd learning-code-coverage/
$ yarn
```

## Usage

```shell
# compile
$ tsc

# stats
$ node bin/stats.js

# instrument
$ node bin/instrument.js > source.instrumented.js

# test
$ npm test

# visualize
$ npm run genhtml

# visualize on linux
$ genhtml -o html/ ./lcov.info
```
