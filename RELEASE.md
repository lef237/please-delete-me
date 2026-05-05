# Release Procedure

How to publish a new version of `please-delete-me` to npm.

## Prerequisites

- You have an npm account with publish permission for `please-delete-me`.
- **Two-factor authentication (2FA) is enabled** on your npm account.

## Steps

### 1. Make sure your changes are merged into `main`

The changes to be released must already be committed and pushed, and your local `main` must be in sync with `main` on GitHub.

```sh
git checkout main
git pull
git status   # should be clean
```

### 2. Log in to npm (only if not logged in)

```sh
npm whoami        # prints your username if already logged in
npm login         # otherwise, log in
```

### 3. Preview the package contents

This does not publish — it shows what will go into the tarball.

```sh
npm publish --dry-run
```

Verify that the expected files (`AA.js`, `index.js`, `README.md`, `LICENSE`, `package.json`, etc.) are included, and that nothing unwanted (`.git`, `node_modules`, …) leaks in.

### 4. Bump the version

Pick a bump type per semver:

| Type  | Command              | When to use                                                                  |
| ----- | -------------------- | ---------------------------------------------------------------------------- |
| PATCH | `npm version patch`  | Backward-compatible bug fixes / display tweaks (e.g. 1.0.4 → 1.0.5)          |
| MINOR | `npm version minor`  | Backward-compatible feature additions (e.g. 1.0.4 → 1.1.0)                   |
| MAJOR | `npm version major`  | Breaking changes (e.g. 1.0.4 → 2.0.0)                                        |

This single command does all of the following:

- Updates the `version` field in `package.json`
- Creates a commit for that change
- Creates a Git tag in `vX.Y.Z` form

### 5. Publish

```sh
npm publish
```

### 6. Push the commit and tag to GitHub

```sh
git push origin main --follow-tags
```

`--follow-tags` ensures the tag created by `npm version` is pushed alongside the commit.

### 7. Verify the release

```sh
npm view please-delete-me version
```

If the new version number is returned, the release is live.

## Troubleshooting

### Aborting after `npm version` has run

To undo the version commit and tag locally:

```sh
git tag -d vX.Y.Z         # delete the local tag
git reset --hard HEAD~1   # drop the version commit
```

If the commit/tag has already been pushed, removing them from the remote affects others — proceed carefully.

### Unpublishing within 24 hours

```sh
npm unpublish please-delete-me@X.Y.Z
```

This breaks any consumers who already depend on that version. Always run `npm publish --dry-run` beforehand to avoid the need for this.
