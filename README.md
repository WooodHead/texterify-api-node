# Texterify API Node

Official Node interface for the [Texterify](https://texterify.com) API. The npm package is available at https://www.npmjs.com/package/texterify-api.

## Table of contents

- 🚀 [Getting started](#getting-started)
- 🔧 [Development](#development)
- 📦 [Publishing](#publishing)
- 🤝 [Contributing](#contributing)
- 📝 [License](#license)

## 🚀 Getting started

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

## 🔧 Development

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

## 📦 Publishing

To create a new release run

```
yarn release
```

## 🤝 Contributing

Want to help build Texterify?

We are happy about every help. For major changes, please [open an issue](https://github.com/texterify/texterify-api-node/issues/new) first to discuss what you would like to change.

## 📝 License

This project is licensed under [MIT](LICENSE).
