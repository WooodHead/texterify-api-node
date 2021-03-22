# Texterify API Node

[![website](https://img.shields.io/badge/website-texterify.com-blue.svg)](https://texterify.com)
[![open issues](https://img.shields.io/github/issues-raw/texterify/texterify-api-node.svg)](https://github.com/texterify/texterify-api-node/issues)
[![stars](https://img.shields.io/github/stars/texterify/texterify-api-node)](https://github.com/texterify/texterify-api-node)

Official Node interface for the [Texterify](https://texterify.com) API. The npm package is available at https://www.npmjs.com/package/texterify-api.

## Table of contents

- [🚀 Getting started](#getting-started)
- [🔧 Development](#development)
- [📦 Publishing](#publishing)
- [🤝 Contributing](#contributing)
- [📝 License](#license)

<h2 id="getting-started">🚀 Getting started</h2>

Install the library by running

```sh
# yarn
yarn add texterify-api

# npm
npm install texterify-api
```

After that you can start using the library as shown below

```ts
const texterify = new Texterify(
  'EMAIL',
  'TOKEN',
  'API_BASE_URL' // optional
);

const projects = await texterify.projects.getAll();

console.log(projects);
```

<h2 id="development">🔧 Development</h2>

Checkout the [Texterify](https://texterify.com) source code (https://github.com/texterify/texterify) and run

```
docker-compose build
```

to build the image `chrztoph/texterify:test` that we are going to use as a server in our tests.

We then start the server by running

```
docker-compose up
```

To execute the test you can then run

```
yarn test
```

in a different terminal.

<h2 id="publishing">📦 Publishing</h2>

To create a new release run

```
yarn release
```

<h2 id="contributing">🤝 Contributing</h2>

Want to help build Texterify?

We are happy about every help. For major changes, please [open an issue](https://github.com/texterify/texterify-api-node/issues/new) first to discuss what you would like to change.

<h2 id="license">📝 License</h2>

This project is licensed under [MIT](LICENSE).
