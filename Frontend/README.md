# React + Relay Example

List of Quotes with Authors implemented in React + Relay.

You can find the backend part of this project [here](https://github.com/sloweyyy/GraphQL-Express-Demo).

## How to run the project

#### Installation

```shell
yarn install

# or if you use npm

npm install
```

#### Configuration

Create `.env` file in the root of the project and add the following content:

```
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:3010/graphql
```

#### Download GraphQL schema

For this, you need to have [graphql-cli](https://github.com/graphql-cli/graphql-cli) installed.

```shell
graphql get-schema --project quotes -e default
```

Build / transform components which are using graphql / relay

```shell
yarn run relay
```

#### Start the project

```shell
yarn start
```
