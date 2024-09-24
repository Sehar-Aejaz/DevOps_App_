const request = require('supertest');
const express = require('express');
const userRoutes = require('../src/routes/api');

const app = express();
app.use('/api', userRoutes);

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2); // Expecting 2 users
  });
});
