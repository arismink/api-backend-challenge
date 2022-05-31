const request = require('supertest')
const app = require('../../../app');
const routes = require('../posts')

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1)
  })
})

describe('/GET posts', () => {

  test('should return all posts tagged tech when optional params are not present', async () => {
    const res = await request(app).get('/api/posts/tech')

    // should return an object containing property 'posts'
    expect(res._body).toHaveProperty('posts');

    // posts should equate to an array
    expect(Array.isArray(res._body.posts)).toBe(true)

    // should not be an empty array
    expect(res._body.posts.length).toBeGreaterThan(0)

  });

  test('should return error if tag is not present', async () => {
    const res = await request(app).get('/api/posts/')

    expect(res._body).toHaveProperty('error')
  });

  test('should display appropriate message if sortBy params is invalid', async () => {
    const res = await request(app).get('/api/posts/tech/fakeParams')

    expect(res._body).toHaveProperty('error', "sortBy parameter is invalid. Please enter a valid sort params from: id, reads, likes, popularity or leave blank.")
  });

  test('should display appropriate message if direction param is invalid', async () => {
    const res = await request(app).get('/api/posts/tech/id/fakeDirection')

    expect(res._body).toHaveProperty('error', "Sort direction is invalid. Please enter a valid direction from: desc, asc or leave blank.")
  });

})