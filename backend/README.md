## Afternoon challenges

### Connect your own database 

- Connect a local mongodb database to express 
- Create a db on the mongo command line, create a user collection, then add in four user objects, you can use what's below

```json
  {
    "name": "harrison",
    "password": "password",
    "role": "admin"
  },
  {
    "name": "anhar",
    "password": "password",
    "role": "card game expert"
  },
  {
    "name": "lav",
    "password": "password",
    "role": "cricket expert"
  },
  {
    "name": "leah",
    "password": "password",
    "role": "meetups expert"
  }
```

- Add the correct database string

```js
// replace users-basic-auth-app with your db name
mongoose.connect('mongodb://localhost:27017/users-basic-auth-app', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('db not connected')
  } else {
    console.log('db connected')
  }
})
```

### Token challenge

Extend the authentication example by implementing a new registration route. This should allow the user to send a POST request to /auth/register with their username and password in the body of the request. The callback should do the following:

- Validate the user has provided a username and password
- Confirm the user does not already exist in MongoDB
- Create a new user in MongoDB
- Generate a token
- Return the token or a valid error if these conditions are not met

Confirm this works with Postman and that the generated token can be used to access protected routes.

### Bcrypt 

Context

Storing plain text passwords and credit card information is a huge security risk when building applications. As a general rule of thumb we want to encrypt or hash a password as early in our process as possible. We are going to extend upon the authentication example covered in the video and implement password hashing.

Challenge
- Use the [bcrpyt](https://www.npmjs.com/package/bcrypt) package and its documentation to help with implementing this feature.
- In the registration route, hash the password using the .hash() method. This should be done as early as possible - never store plain text passwords in your database! Store the new user in the DB with the hashed password.
- Update the login route to use the .compare() method to confirm that the un-hashed password that the user has posted with the request matches the hashed password in the DB.
- Confirm everything is still working with Postman.

### Refreshing expired tokens 

Context
- Tokens have an expiry so that if they have been compromised it does not cause an ongoing problem. Research and implement a solution for refreshing an expired token.

Challenge
- Try to implement this without requiring an additional interaction by the user - i.e. it should be handled within the protected routes.

### Local storage login and logout system

Context
- The front end we'd like you to build upon is for an inspirational quote app. The quote app should allow users to register and login / logout.

Challenge

Completing this task will involve the following:
- Storing the JWT in local storage so the user remains authenticated for further requests
- When the token is received refreshing the page so that the user can click on a button to receive an inspirational quote from this api https://theysaidso.com/api/
- You'll need to setup and API key to use the service 
- When a request is sent to access the quote from the API the token is sent via the headers so that the jwt verify method can be called
- The page will then receive the quote response and the quote can be displayed