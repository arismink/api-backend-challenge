# simple-api-backend-challenge

## Summary

This application fetches data from an API and returns a JSON object containing an array of blog posts. The data is based on the tag provided by the user and is sorted by the optional sortBy parameters that is inputted by the user.

This application will run on port `3000`.

## Getting Started

1. In the root folder, run `npm install` to install all dependencies.

2. To start the application from the root directory, use the command `npm start` or to run with nodemon `npm run dev`.

3. Navigate to `http://localhost:3000/api/posts/:tag`.

4. Run the command `npm test` to start test suite. Application is tested with Jest and Supertest.

### Notes
Specify what tag to search for following this format: `http://localhost:3000/api/posts/:tag/:sortParam?/:direction?`.
  - sortParams and direction are optional query parameters