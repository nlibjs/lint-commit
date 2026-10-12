# @nlib/lint-commit

[![npm](https://img.shields.io/npm/v/%40nlib%2Flint-commit)](https://www.npmjs.com/package/@nlib/lint-commit)
[![Test](https://github.com/nlibjs/lint-commit/actions/workflows/test.yml/badge.svg)](https://github.com/nlibjs/lint-commit/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/nlibjs/lint-commit/branch/main/graph/badge.svg)](https://codecov.io/gh/nlibjs/lint-commit)
[![License](https://img.shields.io/npm/l/%40nlib%2Flint-commit)](https://github.com/nlibjs/lint-commit/blob/main/LICENSE.txt)

Lint your commit messages.

Requires Node.js 22.12.0 or newer. CI tests the latest Node.js 22, 24, and 26 releases.

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
npx @nlib/lint-commit --input "$1"
```
