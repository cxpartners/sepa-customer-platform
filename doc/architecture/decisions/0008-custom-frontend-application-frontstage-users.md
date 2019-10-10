# 8. Custom frontend application for front stage users

* Status: proposed
* Deciders: 
* Date: 2019-10-03

## Context and Problem Statement

Microsoft Dynamics CRM has been proposed as the system to manage contacts, accounts & permits (cases) for the CCP prototype.  
Users should be able to recognise that the service is provided by SEPA (styling) and the interface should be sufficiently customisable
to support a good user experience.

## Decision Drivers

* Data is stored in the CRM so all interactions must be compatible with the data entities available.
* A custom user experience has been proposed so the solution needs to support custom journeys and styling as much as possible.

## Considered Options

* Create a custom web application 
* Use Microsoft's Dynamics 365 Web Portals to provide & manage the interface.

## Decision Outcome

A custom web application, combining a modern reactive frontend framework with a backend API gateway to interact with Dynamics and Azure services via restful webs APIs
would provide the best support for optimising the user journey.

Avoiding the use of a hosted web application reduces the reliance on a single platform.

### Positive Consequences

* Complete control over the user interface and user journey.

### Negative Consequences <!-- optional -->

* Complete 

## Pros and Cons of the Options <!-- optional -->

### Create a custom web application 

A custom web application would communicate either directly with the service API (partially for Azure Blob Storage & authentication) or
via an API gateway (built as part of the application).

#### Positive
* Full control over styling, interactions and journey.
* A modular / component based frontend build can be reused across other web projects.
* Separates display logic from the data layer - all data is managed in the CRM then consumed and displayed using API endpoints.

#### Negative
* Built from the ground up
* Managed, updated and deployed by SEPA.

### Use Microsoft's Dynamics 365 Web Portals to provide & manage the interface.

Microsoft Dynamics 365 Web Portals provide an 'out the box' customisable web interface for their Dynamics systems.  The
styling and page elements can be customised using their templating system which is based on an open source library created by Shopify called Liquid.

#### Positive
* Web forms and lists can be setup for any custom workflow.
* Login and registration can be integrated with Azure Active Directory & Azure Active Directory B2C
* Multiple website can be setup, potentially allowing SEPA to handle multiple license types.
* All infrastructure and code management is handled within the Dynamics portal.

#### Negative
* Out of the box, CRM forms are targetted for sales, marketting and support so a lot of work would need to be done to repurpose and restyle whats available.
* Increases vendor lock in - frontend code is stored within the CRM system.
* Not clear if a fully custom journey is possible, and if so, how difficult it would be to build (what level of custom coding woudl be required?)

## Links 
[Deliver web engagement experiences with Dynamics 365 Portals](https://docs.microsoft.com/en-us/dynamics365/portals/administer-manage-portal-dynamics-365)
