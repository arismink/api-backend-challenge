const request = require('supertest')
const app = require('../../../app');

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1)
  })
})

describe('/GET posts', () => {
  test('should return all posts tagged tech', async () => {
    const res = await request(app)
      .get('/api/posts/tech')

    expect(res.statusCode).toEqual(200)
    console.log(res._body);
    expect(res._body).toHaveProperty('posts');
    expect(Array.isArray(res._body.posts)).toBe(true)
  })
})