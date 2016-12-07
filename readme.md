# healthiers [![Build Status](https://travis-ci.org/healthiers/healthiers.svg?branch=master)](https://travis-ci.org/healthiers/healthiers)

A unified and safely accessible home for your medical records. Sometimes soon.

## installing

Currently installation is only possible for development. The things you'll need:

* RethinkDB - [https://www.rethinkdb.com/docs/install](https://www.rethinkdb.com/docs/install)
* Node - [https://nodejs.org/en/download](https://nodejs.org/en/download)
* NPM - (comes with node)
* Git - [https://git-scm.com/downloads](https://git-scm.com/downloads)

Once you downloaded and installed these, it's time to clone the repo

```bash
git clone https://github.com/healthiers/healthiers.git
```
Now change to the cloned directory

```bash
cd healthiers
```
You can see the most important directories of the project: `client` and `graphql-server`

It's time to install the NPM dependencies in the root folder and both `client` and `graphql-server` - 
note that on windows you might have to do these as separate commands, the `&&` might not work.

```bash
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..
```
Now everything should be properly installed, you can start and initialize your database 
and compile semantic-ui's css (this has to be looked at, semantic handles this horribly, 
we have a bunch of dependencies checked in as source). 

Run this in the root folder:

```bash
npm run init
```
The app is ready to be run

```bash
npm run start-dev
```

This command will start 3 processes:

1. The database (RethinkDB)
2. Automatic watching and updating of the server
3. Automatic watching and updating of the client

You can access the running application using

1. [http://localhost:3000](http://localhost:3000) - (client)
2. [http://localhost:3000/explore](http://localhost:3000/explore) - (gui for exploring the GraphQL API)
3. [http://localhost:3000/api](http://localhost:3000/api) - (the GraphQL API itself)

## used technologies

### overall 
* [babel](https://babeljs.io/) - to transform our ES6/2015/Whatever code to ES5
* [eslint](http://eslint.org/) - to ensure code quality and prevent code smell
* [jest](https://facebook.github.io/jest/) - for running tests

### server
* [express](http://expressjs.com/) - for serving content
* [graphql](http://graphql.org/graphql-js/) - for creating easy to use endpoint for our data
* [jwt](https://jwt.io/) - for authentication (TODO this needs a lot of work to make it truly safe)

### client
* [react](https://facebook.github.io/react/) - for managing the UI
* [semantic-ui](http://semantic-ui.com/) - to provide a nice looking and stable UI template with us writing minimal css
* [semantic-ui-react](http://react.semantic-ui.com/) - to combine the above to into react components
* [redux](http://redux.js.org/) - for predictable state management
* [redux-observable](https://redux-observable.js.org/) - for predictable sideeffect

## how can I help?

Since the project is in a very early phase, feel free to post any ideas or issues
on the [issues](https://github.com/healthiers/healthiers/issues) page or start working
on one of the existing issues **that is not assigned to anyone**