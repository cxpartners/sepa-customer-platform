# SEPA Corporate Customer Platform - Alpha

## Dependencies

- Docker installed on your machine

## Setup
For Docker (staging):
- `docker build --tag=sepa-prototype .`
- `docker-compose up -d`

else ():
- `npm install`
- `npm run dev`

## Development

A feature branch branching strategy is in use, specifically:

- When a new feature is to be added, a developer should branch from `develop` naming the new branch `feature/[short description of new feature]`
- When the work is ready (tested, linted etc.), a pull request should be opened against the `develop` branch.
- A peer review should be undertaken against the pull request and the branch merged.
- The CI server will build from the develop and deploy to the staging server.

## Releasing

- Determine the new semantic version of the release.
- Update `package.json`.
- Ensure `changelog` is up to date, whereby changes for the release are listed underneath the version.
- Merge `develop` into `master`.
- Manually run the CI server so that the master is deployed to production.
- Create a new `release/vX.Y.Z` where the release number relates to the semantic version of the release.

## Github pages

https://alpha.ccp.sepa.cxp.io/

Rebuild the ghpages version:

```
npm run cxbuild
npm run cxdeploy
```

## CI

BuddyCI is used for the CI server (see `buddy.yaml`)

Buddy uses a key to SSH into an AWS EC-2 instance and deploy via rsync.

SSH into the server to make changes to Docker.
