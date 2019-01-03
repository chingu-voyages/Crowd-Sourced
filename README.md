<!-- ![Logo of the project](./images/logo.sample.png) -->
# CrowdSourced
<!-- # Name of the project &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Additional information or tag line -->

Chingu Voyage Project: A website that allows people to share resources they may not have a use for and also allow people who need resources to start a campaign, similar to gofundme (but no money) but for resources.

Live Site: http://chingu-project.herokuapp.com

## Installing / Getting started

```bash
git clone git@github.com:chingu-voyages/bears-project-13.git
# first install server side
cd bears-project-13
npm install
```
This should install all scripts in /package.json, /server/package.json, and /client/package.json

## Developing

### Built With
Express, Node, Sass, GraphQL, React, React-router
<!-- List main libraries, frameworks used including versions (React, Angular etc...) -->

<!-- ### Prerequisites
What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links. -->


### Setting up and running Dev

After you install all packages then to run dev

```bash
npm run start-dev
```

This should start the express server and react server.

### Deploying / Publishing

This project is setup to be deployed to Heroku. I usually deploy to Heroku using the website not the command line.

It has some scripts specifically for Heroku such as

```bash
npm run heroku-postbuild
```

NOTE: this deletes the client folder

This script builds the react (client) side and moves the build to the root of the project in a folder called 'build' and finally it deletes the whole client folder to save space in heroku (cause we do not need the unbuilt react app in deployment).


<!-- ## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.


## Database

Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc... -->

## Resources

Some Resources we used:
- https://feathericons.com
- https://unsplash.com

<!-- ## Licensing

State what the license is and how to find the text version of the license. -->
