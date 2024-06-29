# user-api

## Description

This project is a simple user API created using `bun init` in Bun v1.1.17. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime. The API serves user data and allows you to retrieve all users or a specific user by ID.

## Features

- Retrieve all users
- Retrieve a specific user by ID

## Project Structure

```
bun-typescript-rest-api/
├── src/
│ ├── controllers/
│ │ └── userController.ts
│ ├── data/
│ │ └── user.json
│ ├── routes/
│ │ └── userRoutes.ts
│ └── index.ts
├── tsconfig.json
└── package.json
```

1. `src/controllers/userController.ts`

    Contains the logic for handling user data. It exports two main functions :

    - `getAllUsers`: Retrieves all users.
    - `getUserById`: Retrieves a user by their ID.

2. `src/data/user.json`

    A JSON file containing the user data.

3. `src/routes/userRoutes.ts`

    Handles routing for the user API. It exports a single function :
    - `handleRequest`: Determines the appropriate response based on the request URL.

4. `src/index.ts`

    The entry point of the application. It sets up the server using Bun and directs requests to the appropriate route handler.

## Installation

To install dependencies, run :

```bash
bun install
```

## Usage

To start the server, run :

```bash
bun run start
```

The server will start at : <http://localhost:3000>

## Credit

ivandjoh
