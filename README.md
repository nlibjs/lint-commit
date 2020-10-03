# @nlib/lint-commit

![Test](https://github.com/nlibjs/lint-commit/workflows/Test/badge.svg)

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

## Installation and Usage

```
npm install --save-dev @nlib/lint-commit
```

Then, set `nlib-lint-commit` to your [husky] configuration.

```json
{
    "husky": {
        "hooks": {
            "commit-msg": "nlib-lint-commit --input HUSKY_GIT_PARAMS"
        }
    },
}
```

[husky]: https://www.npmjs.com/package/husky
