const request = require('supertest');
const app = require('../../index');

describe('/api/articles', () => {
  test('GET: should return something', async (done) => {
    const res = await request(app).get('/api/articles');
    expect(1).toBe(1);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    await done();
  });
});
