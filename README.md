# simple-api-backend-challenge

## Summary

This application fetches data from an API and returns a JSON object containing an array of blog posts. The data is based on the tag provided by the user and is sorted by the optional sortBy parameters that is inputted by the user.

## Getting Started

1. In the root folder, run `npm install` to install all dependencies.

2. To start the application from the root directory, use the command `npm start`.

3. Navigate to `http://localhost:3000/api/posts/:tag`. Specify what tag to search for following this format: `http://localhost:3000/api/posts/:tag/:sortParam?/:direction?`.
  - sortParams and direction are optional query parameters