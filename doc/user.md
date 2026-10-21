# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "john",
  "password": "******",
  "name": "John"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "john",
    "name": "John"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "john",
  "password": "******"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "john",
    "name": "John",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body (Success) :

```json
{
  "data": {
    "username": "john",
    "name": "John"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "password": "******", // Optional, if want to change password
  "name": "John" // Optional, if want to change name
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "john",
    "name": "John"
  }
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :

- Authorization : token

Response Body (Success) :

```json
{
  "data": true
}
```
