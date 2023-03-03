# POC for HEE Careers Site - Alpha
## Introduction
This branch of the HEE NWPS website is designed to illustrate how we can incorporate third party services into the NWPS in a relatively straightforward way, using 
asynchronous calls to collate and display the data that will be surfaced on pages within NWPS.

We do this by decoupling the service provider from the NWPS and make use of an intermediate third party (custom written) service to collate and manage data aquisition 
## New Bloomreach components
### New document type (thirdpartyelement)
This document type captures data baout the service which is then surfaced in the page. The fields are;-
- a title, that will be displayed on the page, and,
- a script, which wil be used to identify the JavaScript code that is used to manage the interaction with the third party.

** Note that the script options are constrained and should be managed in line with new scripts that are introduced to the system over time. 
### New Javascript for the page
The JavaScript used to communicate with the service is held in a file called `ajaxjobs.js`. This is added to the NWPS project
### New JavaScript for the jobs service
The JavaScript that runs as a node.js process and therefore used by the Jobs Service is held in the hee-jobsearch directory beneath this main folder and is described in greater detail below.
### New component type (Third Party Page)
This is a new page type with a simple Freemarker template that is used to handle the JavaScript. The page must be added to a sitemap and then a Third Party 
Element component added to it. 

### Third Party Component
The component is used to manage the interaction with the JavaScript on a Third Party Page. Create the page in the sitemap and drop this component in place 
and then nominate your instance of the thirdpartyelement document as the source of the title and script details

## Interacting with the service
As noted, the Jobs page makes use of a service that provides the data. This service acts as a gateway to the NHS Jobs API. 
### Using service based approach
We selected a gateway pattern for the following reasons;-
- we wanted asynchronous communication to remove the dependency on the Jobs service before a page rendered
- the service acts as a transformation gateway, meaning we can add additional processing logic in the gateway without affecting the NWPS
- the service can manage outage with the NHS Jobs service and provide a default mechanism for error handling
- other third party services may require additional interaction before being made available, such as authentication, and teh service nca manage that 
and remove that dependency for NWPS

## Running the service
The service is written using JavaScript and runs using node.js 
### Pre-requisites
You must have node.js v16.14.0 (minimum) as well as npm v8.3.1 installed to execute the service. For Linux or mac users, we recommend using a tool such as 
[nvm](https://github.com/nvm-sh/nvm) to manage your node.js and npm installations since it allows you to easily move between versions without having to 
adjust PATH settings. For Windows you can use WSL to enter a Linux shell and use NVM, but for native Windows execution, NVM is a little more involved 
and you may prefer to install your preferred node.js and npm versions directly. (There are a number of articles online that describe how to use NVM with Windows
but it is beyond the scope of this work to support that)

### Starting the service
From a command line, execute;-

```npm run dev```

This will execute the service, establishing a service listening on port 3008. The service references the NHS Jobs API via the url `https://www.jobs.nhs.uk/search_xml`. 
Both the port and URL for the jobs service can be modified.

To modify the port in use, edit the `.env` file found in the hee-jobsearch directory and change the value of the PORT environment variable accordingly. For the Jobs URL, edit the JOBS_URL value
## Retrieving job information
Once the service is up and running you can access the page we created in BloomReach by navigating to `http://localhost:8080/jobs` and entering your search criteria. 
## Tracing the call
By default, the JavaScript in the page will write to the JavaScript console in the browser, adding the parameters it is about to send to the service. The service will also write information to its own console.  



