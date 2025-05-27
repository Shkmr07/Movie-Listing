# Movie Listing API

This is a simple Movie Listing API where users can sign up, log in, and manage a list of movies. It supports creating, reading, updating, and deleting movies. JWT is used for authentication, and protected routes require a valid token.


## Routes

### User Routes

#### POST `/api/user/signup`
- Register a new user.
- Body: `name`, `email`, `password`

#### POST `/api/user/login`
- Login existing user and get JWT token.
- Body: `email`, `password`

### Movie Routes (Protected - Requires JWT)

#### GET `/api/movie`
- Get all movies.

#### POST `/api/movie/add`
- Add a new movie.
- Body: `title`, `description`, `releaseDate`, etc.

#### DELETE `/api/movie/delete/:id`
- Delete a movie by its ID.

#### PUT `/api/movie/update/:id`
- Update a movie by its ID.

## Authentication

All movie routes require a JWT token.

Send the token in the request header like this:


## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

## How to Run

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root folder with the following:
4. Start the server:


## Note

This project is for learning purposes and demonstrates the use of Express routes, JWT authentication, middleware, and CRUD operations with MongoDB.
