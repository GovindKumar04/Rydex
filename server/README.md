# Rydex Backend

Rydex is a backend application for an Uber-like service, built using **Node.js**, **Express**, and **MongoDB**. It provides APIs for user registration, authentication, and profile management.

## Features

1. **User Registration**: Allows users to register with their first name, last name, email, and password.
2. **User Login**: Authenticates users and generates a JSON Web Token (JWT) for secure access.
3. **User Profile**: Retrieves the authenticated user's profile.
4. **Logout**: Logs out the user by blacklisting the token.
5. **Password Hashing**: Ensures secure storage of user passwords using bcrypt.
6. **JWT Authentication**: Provides secure access to protected routes using JWT.
7. **Input Validation**: Validates user inputs using `express-validator`.
8. **Token Blacklisting**: Implements token blacklisting for secure logout functionality.

## Project Structure

```
server/
    .env
    app.js
    package.json
    server.js
    config/
        db.js
    controllers/
        user.controller.js
    models/
        user.model.js
        blacklistToken.model.js
    routes/
        user.routes.js
    services/
        user.services.js
    middlewares/
        auth.middleware.js
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/rydex-backend.git
   ```

2. Navigate to the `server` directory:

   ```bash
   cd rydex-backend/server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `server` directory with the following content:

   ```env
   PORT=4000
   MONGO_URL=mongodb://localhost:27017/rydex
   JWT_SECRET=your-jwt-secret
   ```

5. Start the server:

   ```bash
   node server.js
   ```

## API Endpoints

### 1. User Registration

**Endpoint:** `POST /user/register`

**Description:** Registers a new user.

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Validation Rules:**

- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.

**Response:**

- **Success (201):**

  ```json
  {
    "token": "jwt-token-here",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```

- **Error (400):**

  ```json
  {
    "errors": [
      {
        "msg": "Please enter a valid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password can be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### 2. User Login

**Endpoint:** `POST /user/login`

**Description:** Authenticates a user and returns a JWT token.

**Request Body:**

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Validation Rules:**

- `email` must be a valid email address.
- `password` must be at least 6 characters long.

**Response:**

- **Success (200):**

  ```json
  {
    "token": "jwt-token-here",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```

- **Error (401):**

  ```json
  {
    "msg": "Invalid email or password"
  }
  ```

### 3. Get User Profile

**Endpoint:** `GET /user/profile`

**Description:** Retrieves the authenticated user's profile.

**Headers:**

- `Authorization: Bearer <jwt-token>`

**Response:**

- **Success (200):**

  ```json
  {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
  ```

- **Error (401):**

  ```json
  {
    "msg": "Unauthorized"
  }
  ```

### 4. Logout

**Endpoint:** `GET /user/logout`

**Description:** Logs out the user by blacklisting the token.

**Headers:**

- `Authorization: Bearer <jwt-token>`

**Response:**

- **Success (200):**

  ```json
  {
    "msg": "Logged out"
  }
  ```

- **Error (401):**

  ```json
  {
    "msg": "Unauthorized"
  }
  ```

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM for MongoDB.
- **bcrypt**: For hashing passwords.
- **jsonwebtoken**: For generating authentication tokens.
- **express-validator**: For validating request inputs.

## Example Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. Use a tool like Postman or cURL to test the API.

3. Register a user:

   ```bash
   curl -X POST http://localhost:4000/user/register \
   -H "Content-Type: application/json" \
   -d '{
     "fullname": {
       "firstname": "John",
       "lastname": "Doe"
     },
     "email": "johndoe@example.com",
     "password": "password123"
   }'
   ```

4. Login a user:

   ```bash
   curl -X POST http://localhost:4000/user/login \
   -H "Content-Type: application/json" \
   -d '{
     "email": "johndoe@example.com",
     "password": "password123"
   }'
   ```

5. Access the user profile:

   ```bash
   curl -X GET http://localhost:4000/user/profile \
   -H "Authorization: Bearer <jwt-token>"
   ```

6. Logout the user:

   ```bash
   curl -X GET http://localhost:4000/user/logout \
   -H "Authorization: Bearer <jwt-token>"
   ```

## License

This project is licensed under the ISC License.