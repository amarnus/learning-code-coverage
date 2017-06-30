# learning-code-coverage

Companion code repo for a blog post series: https://engineering.semantics3.com/understanding-code-coverage-1074e8fccce0

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
```
