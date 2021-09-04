# @nlib/lint-commit

[![Test](https://github.com/nlibjs/lint-commit/actions/workflows/test.yml/badge.svg)](https://github.com/nlibjs/lint-commit/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/nlibjs/lint-commit/branch/master/graph/badge.svg)](https://codecov.io/gh/nlibjs/lint-commit)

Lint your commit messages.

## Message Format

```
CommitMessage = Type ["(" Scope ")"] ": " Subject [EOL Body]
Type          = DefaultTypes (or your configuration)
DefaultTypes  = "build" | "chore" | "ci" | "docs" | "feat" | "fix" | "perf" |
                "refactor" | "revert" | "style" | "test" | "deps" | "breaking"
Scope         = DefaultScope (or your configuration)
DefaultScope  = /^[\w-]+$/
Subject       = /^\S[^\r\n]*$/ (or your configuration)
EOL           = /\r\n|\r|\n/
Body          = <Arbitrary string>
```

## Usage

Then, set `@nlib/lint-commit` to `commit-msg` hook.

```sh
#!/bin/sh
npx @nlib/lint-commit --input $1
```

[husky]: https://www.npmjs.com/package/husky
