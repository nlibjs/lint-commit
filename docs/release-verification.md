# Shared release adoption verification

Verified on 2026-10-12 from candidate `5ad95cd434ee5179b126e2ca8b2bc9cae2d81e04`, based on main `b8911187707ec7b7fee83ca1e3fb52002a48ad24`.

## Caller behavior

- Verify, Stage and Finalize pin workflow `986b87befafad2f4f990c934165a90ea37ddbf36`, which pins helper `70dd80ae972e812efcc9606d0ec5d514c8be3982`. Both commits are preserved in shared main.
- Preserve automatic Stage on main/package.json pushes and the release concurrency group. Manual dispatch defaults to Verify; Finalize takes the approved stable version.
- Preserve the `deployment` environment for Stage and Finalize. Verify is read-only without an environment. Stage requests contents/id-token write; Finalize requests contents write.
- Package version 2.0.0, package.json, lockfile, source, and the existing platform/Node compatibility workflow are unchanged. The README gains a maintainer guide link.

## Validation

Node 26.11.1, npm 11.21.0, the committed lockfile, cleanup-package-json 0.5.0 and actionlint 1.7.12 were used.

| Check | Result |
| --- | --- |
| Frozen installation, ESLint, build | Passed |
| Existing AVA suite | All 47 tests passed |
| Production shared Verify | Passed lint/test/build/cleanup/pack with all release-state, source-ref and publication methods guarded |
| Caller/shared workflow contracts | Passed inputs, SHA pins, narrow permissions and environment selection |
| actionlint and whitespace | Passed |
| Installed cleaned tarball | Both CLI aliases accept a valid commit message and reject an invalid one, including paths with spaces |

## Package comparison

The comparison packed the same candidate before and after mandatory cleanup. Both tarballs contain 23 files, including `lib/cli.mjs` and declarations. Test files and source maps remain excluded.

Only `package/package.json` changed: cleanup removed `devDependencies`, `eslintConfig`, `ava`, and `renovate`. Every retained manifest field is unchanged, including dependencies, engines, main, bin, scripts, files, type, repository and publishConfig. The other 22 files are identical in content, mode and type.

Local cleaned candidate integrity:

```text
sha512-VxWMDzCWxKiffDaFd3yKW2PHyXtpitYe8sRlaknaIfdKvyzOrjM7K40EBgFHx8/Q6n9I8h9S/yUdCbuzae3SFQ==
```

This is verification evidence for a local candidate, not an npm publication. npm 2.0.0 is already public and its version tag exists. Adoption does not change package.json and therefore does not trigger Stage on merge. Confirm the Trusted Publisher configuration in the [maintainer guide](releases.md) before the next normal release.
