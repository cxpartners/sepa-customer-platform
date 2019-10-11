# 5. Manage user roles and permissions using Active Directory Groups

* Status: proposed
* Deciders:
* Date: 2019-10-03

## Context and Problem Statement

The application needs to control access permits & their supporting documents based on user roles.  As Active Directory and Active Directory B2C have been proposed as the authentication methods, SEPA needs to 

## Decision Drivers 

* Applicants and operators will be grouped by 'account' in the CRM, however SEPA should be able to differentiate between  organisation users & designate an 'administrator'.
* SEPA staff will potentially require different access levels depending on the application, sensitive data requirements mean not at all staff should be able to view all documents connected to a permit.

## Considered Options

1. All user groups are managed through Active Directory groups
2. SEPA staff permissions are managed by Active Directory groups, operator and applicant permisisons are managed via their relationship to the CRM account.

## Decision Outcome

[Option 1] SEPA staff should be assigned to Active Directory groups based on their roles, the following are suggested but need to be reviewed based on a more thorough investigation of roles:

* SEPA Marine Pen application - administrators
* SEPA Marine Pen application - users

This setup would allow for additional license type grouping and segmentation in the future.

Frontstage users (applicants and operators) should also be organised into group structures within the Azure Active Directory B2C, 

* [Operator name] - administrators
* [Operator name] - users

This will provide a level of organisation hierachy and administration 

### Positive Consequences

* This option maintains a absic user hierachy outside of the Dynamics system, which would potentially be useful if the user accounts are used in other applications

### Negative Consequences

* Potentially more overhead in terms of group management & to an extent duplication in terms of the CRM account to contact grouping.

## Pros and Cons of the Options

### 1. All user groups are managed through Active Directory groups

Groups are used for both Active Directory back stage users and Active Directory B2C front stage users.

#### Positive
* Provides flexiblity to assign additional permissions and actions to multiple operator administrators.
* Provides greater organisation in Active Directory B2C (when viewed in isolation)
* Potential to reuse account setup for other action not related to the CRM.

#### Negative
* This would create an additional relationship between operator roles that is already possible in the CRM (primary/lead contact on the account entity).

### 2. SEPA staff permissions are managed by Active Directory groups, operator and applicant permisisons are managed via their relationship to the CRM account

SEPA staff grouping to be provided by Active Directory groups, front stage users who authenticate using Active Directory B2C would be grouped together & given app permissions based on their user account link to their CRM contact entity.   CRM contacts will be linked to their organisation's account entity (providing the group structure) and administrators would be assigned using the 'primary contact' field on the account entity.

#### Positive
* No duplication of contact to account grouping, CRM is the single source of contact relationships & an organisation's lead contact.

#### Negative
* Seen in isolation, the front stage Active Directory B2C would have no identifiable structure or links without querying the CRM data.

## Links <!-- optional -->

* [Microsoft Graph API for user & group management](https://docs.microsoft.com/en-gb/previous-versions/azure/ad/graph/api/users-operations)
