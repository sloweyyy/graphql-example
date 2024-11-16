# GraphQL API for Quotes Management

This project is a GraphQL API for managing quotes and authors. It allows users to create, read, update, and delete quotes and authors through a flexible and efficient API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

## Features

- Create, read, update, and delete authors.
- Create, read, update, and delete quotes.
- Query quotes with pagination and filtering options.
- Author information is linked to quotes.

## Technologies Used

- Node.js
- Express.js
- GraphQL
- Knex.js
- MySQL
- Jest

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (or your preferred SQL database)
- Yarn or npm

### Installation

### 1. Clone the Repository:

```bash
git clone https://github.com/sloweyyy/graphql-example.git
cd graphql-example/Backend
```

### 2. Install Dependencies:

Choose your preferred package manager:

```bash
# With npm:
npm install

# Or with yarn:
yarn install
```

### 3. Set Up Your Database:

- Create a MySQL database.
- Update the database connection settings in the `.env` file.

### 4. Run Migrations and Seed the Database:

```bash
# With npm:
npm run migrate
npm run seed

# Or with yarn:
yarn run migrate
yarn run seed
```

### 5. Start the Server:

```bash
# With npm:
npm start

# Or with yarn:
yarn start
```

Alternatively, you can use Docker to build and run the project:

```bash
docker-compose up --build
```

### 6. Start the Frontend:

```bash
cd Frontend
yarn install
yarn run relay
yarn start
```

### Access URLs:

- **Server:** `http://localhost:3010/graphql`
- **Frontend:** `http://localhost:3000`
- **GraphQL Playground:** `http://localhost:3010/playground`

## API Endpoints

#### Example Queries

Get list of authors (_it will return only first 10 authors!_):

```graphql
query {
  authors {
    edges {
      node {
        id
        _id
        firstName
        lastName
      }
    }
  }
}
```

Filter authors based of first name, also return total number of such authors:

```graphql
query {
  authors(firstName: "Robert") {
    totalCount
    edges {
      node {
        id
        _id
        firstName
        lastName
      }
    }
  }
}
```

Order authors by first name and last name:

```graphql
query {
  authors(
    orderBy: [
      { field: FIRST_NAME, direction: ASC }
      { field: LAST_NAME, direction: ASC }
    ]
  ) {
    edges {
      cursor
      node {
        _id
        firstName
        lastName
      }
    }
  }
}
```

Get name of author with ID = 4:

```GraphQL
query {
  author(id: 4) {
    id
    _id
    firstName
    lastName
  }
}
```

Get list of quotes:

```GraphQL
query {
  quotes {
    edges {
      node {
        id
        _id
        text
      }
    }
  }
}
```

Create new author:

```GraphQL
mutation {
  createAuthor(input:{
    firstName:"Phuc"
    lastName:"Truong"
  }) {
    id
    _id
    firstName
    lastName
  }
}
```

Update existing author:

```GraphQL
mutation {
  updateAuthor(input:{
    id: 1
    firstName: "Tai"
    lastName: "Ngu"
  }) {
    id
    _id
    firstName
    lastName
  }
}
```

Create new quote:

```GraphQL
mutation {
  createQuote(input: {
    authorId: 1, // Replace with a valid author ID
    text: "This is a new quote."
  }) {
    id
    _id
    text
    author {
      id
      _id
      firstName
      lastName
    }
  }
}
```

Update existing quote:

```GraphQL
mutation {
  updateQuote(input: {
    id: 1,
    text: "Đây là một quote đã được cập nhật."
  }) {
    id
    _id
    text
    author {
      id
      _id
      firstName
      lastName
    }
  }
}
```

Delete an author:

```GraphQL
mutation {
  deleteAuthor(id: 1) {
    id
    _id
    firstName
    lastName
  }
}
```

Delete a quote:

```GraphQL
mutation {
  deleteQuote(id: 1) {
    id
    _id
    text
    author {
      id
      _id
      firstName
      lastName
    }
  }
}
```

## Testing

To run the tests for the API, use the following command:

```bash
cd Backend
npm test
# or
yarn test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
