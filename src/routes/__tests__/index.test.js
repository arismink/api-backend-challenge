const request = require('supertest')
const app = require('../../../app');
const routes = require('../posts')

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1)
  })
})

describe('/GET posts', () => {

  test('should return all posts tagged tech', async () => {
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

})