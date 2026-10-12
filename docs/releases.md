# Maintainer release guide

The Release workflow pins `nlibjs/actions` to `986b87befafad2f4f990c934165a90ea37ddbf36`, with helper `70dd80ae972e812efcc9606d0ec5d514c8be3982`.

## Configuration

Configure npm Trusted Publisher for `@nlib/lint-commit` with these values:

| Setting | Value |
| --- | --- |
| Organization or user | `nlibjs` |
| Repository | `lint-commit` |
| Workflow filename | `release.yml` |
| Environment | `deployment` |

Stage and Finalize use the repository's `deployment` environment. Each operation requires its environment approval if protection rules are configured. Verify runs without that environment.

## Operations

1. For a nonpublishing check, select **Release → Run workflow**, choose a branch, select `action=verify`, and leave version empty. Verify runs lint, tests, build, cleanup and tarball checks.
2. Prepare a normal version and changelog update, then merge to main. A package.json push starts Stage automatically. Manual Stage on main accepts the current package version; leave version empty.
3. Check the Stage run and its saved draft for the intended package/version.
4. Approve the exact version on npmjs.com's **Staged Packages** page with maintainer 2FA.
5. Run Release on `main` with `action=finalize` and the approved version without `v`.

Manual dispatch defaults to Verify. Stage and Finalize require main. This package publishes to npm and GitHub Releases.

## Recovery

Follow the shared workflow's [recovery procedure](https://github.com/nlibjs/actions/blob/986b87befafad2f4f990c934165a90ea37ddbf36/README.md#existing-versions-and-failures) for failed or partial releases.

## Updating the workflow

Update all three full SHA references in `.github/workflows/release.yml` together. Confirm that the workflow and its helper pin are preserved in shared main history, Stage and Finalize still use `deployment`, and the existing Lint and Test checks pass before merging.
