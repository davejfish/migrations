const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('movies routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it('GET /movies should return a list movies with genre', async () => {
    const response = await request(app).get('/api/v1/movies');
    console.log('-------------------> ', response.body);
    expect(response.status).toBe(200);
  });
});

