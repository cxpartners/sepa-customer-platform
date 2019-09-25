# SEPA Corporate Customer Platform - Alpha



| Prototype data                    | CLAS table (api)      | Entity field              |   
|-----------------------------------|-----------------------|---------------------------|
| Contact name                      | V_ALL_CONTACT_DETAILS | CONTACT_NAME              | 
| Contact reference number          | V_ALL_CONTACT_DETAILS | CONTACT_NAME              | 
| Contact - organisation name       | V_ALL_CONTACT_DETAILS | ORGANISATION_NAME         | 
| Contact - organisation address    | V_ALL_CONTACT_DETAILS | ADDRESS                   | 
| Contact - organisation post_code  | V_ALL_CONTACT_DETAILS | POST_CODE                 | 
| License - id                      | RR01_LICENCES         | LICENCE_NUMBER            | 
| License - site name               | RR01_LICENCES         | SITE_NAME                 | 
| License - water body              | RR01_LICENCES         | RIVER_NUMBER ?            | 
| License - Last updated            | RR01_LICENCES         | LICENCE_STATUS_DATE       |   
| OR                                | RR03_LICENCE_TASKS    | TASK_END_DATE             |   
| License - Review date             | RR01_LICENCES         | LICENCE_STATUS_DATE       |  
| OR                                | RR03_LICENCE_TASKS    | TASK_END_DATE             | 





Notes
               
Does this date represent the last 'status update'?
Could the last 'task end date' be used for last update?
The prototype is looking to show a date by which the license will expire / need to be reviewed
  



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

## CI

BuddyCI is used for the CI server (see `buddy.yaml`). ***TO DO***

Buddy uses a key to SSH into an AWS EC-2 instance and deploy via rsync.

SSH into the server to make changes to Docker.