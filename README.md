# Texterify Node API

## Development

Checkout the Texterify source code (https://github.com/chrztoph/texterify) and run

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

in a different shell.

## Publishing

To create a new release run

```
yarn release
```
