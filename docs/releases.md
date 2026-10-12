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

Stage and Finalize use the repository's `deployment` environment. Each operation requires its environment approval if protection rules are configured. Verify uses read-only permissions and runs without that environment. Release tooling uses Node 26.x, npm 11.21.0 and locked cleanup-package-json 0.5.0; package compatibility remains defined by package.json and the test workflow.

## Operations

1. For a nonpublishing check, select **Release → Run workflow**, choose a branch, select `action=verify`, and leave version empty. Verify runs lint, tests, build, cleanup and tarball checks.
2. Prepare a normal version and changelog update, then merge to main. A package.json push starts Stage automatically. Manual Stage on main accepts the current package version; leave version empty.
3. Stage retains `release-source/v<version>` at the fixed source SHA before preparation. It saves the tarball and integrity in a draft GitHub Release, then submits that exact tarball to npm.
4. Approve the exact version on npmjs.com's **Staged Packages** page with maintainer 2FA.
5. Run Release on `main` with `action=finalize` and the approved version without `v`. Finalize compares public npm with the saved tarball, publishes the draft, verifies the version tag and deletes the matching source branch.

Manual dispatch defaults to Verify. Stage and Finalize require main. The release concurrency group queues operations without canceling an active run. This package publishes to npm and GitHub Releases.

## Recovery

- An existing published npm version and version tag make Stage a successful no-op.
- Keep the draft and source branch if npm staging or the receipt update fails. Inspect npm Staged Packages and public metadata before retrying. An unconfirmed draft stops Stage without resending the package.
- If npm is public, retry Finalize for the same version. It verifies the saved package and source instead of rebuilding current main. Cleanup can be retried after publication without publishing again.
- A source branch at another SHA, duplicate assets, or inconsistent version tags requires inspection. The workflow retains conflicting refs.
- Reset a definitively failed attempt only after confirming no pending/public npm version and no version tag exists. Record the source SHA and preserve any draft assets, then delete the failed draft and matching source branch before staging current main. A failed build may leave only the source branch.
- An older draft or already-outdated queued Stage can encounter GitHub workflow permission restrictions before a source ref exists. Verify the recorded SHA and package state, retain that SHA with `release-source/v<version>`, and retry the failed operation.

See the shared workflow's [recovery procedure](https://github.com/nlibjs/actions/blob/986b87befafad2f4f990c934165a90ea37ddbf36/README.md#existing-versions-and-failures).

## Updating the workflow

Update all three full SHA references together. Confirm that the workflow and its helper pin are preserved in shared main history. Review the caller contracts and compatibility CI before merging.
