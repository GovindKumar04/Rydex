# Uber Backend

This is the backend for the Uber-like application. It is built using Node.js, Express, and MongoDB. The backend provides APIs for user registration and authentication.

## Project Structure

```
.gitignore
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
    routes/
        user.routes.js
    services/
        user.services.js
```

## Installation

1. Clone the repository.
2. Navigate to the `server` directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `server` directory with the following content:

   ```
   PORT=4000
   MONGO_URL=mongodb://localhost:27017/uber
   JWT_SECRET=jwt-secret-here
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
      "_id": "64f1c2e4b5d1c2e4b5d1c2e4",
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
      "_id": "64f1c2e4b5d1c2e4b5d1c2e4",
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

### 3. Root Endpoint

**Endpoint:** `GET /`

**Description:** Returns a simple greeting message.

**Response:**

- **Success (200):**

  ```text
  hello
  ```

## New Features

1. **Password Hashing:**
   - Passwords are hashed using `bcrypt` before being stored in the database for enhanced security.

2. **JWT Authentication:**
   - A JSON Web Token (JWT) is generated upon successful registration or login, allowing secure user authentication.

3. **Input Validation:**
   - Input validation is implemented using `express-validator` to ensure that user inputs meet the required criteria.

4. **Error Handling:**
   - Proper error handling is implemented to return meaningful error messages for invalid inputs or authentication failures.

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

5. You will receive a response with a JWT token and user details.

## License

This project is licensed under the ISC License.