import request from 'supertest'
import mongoose from 'mongoose'
import { app, server, store } from '../app.js'
import connectDB from '../config/db.js'
import User from '../models/User.js'

describe('Integration', () => {
  beforeEach(async () => {
    await connectDB()
  })

  afterEach(async () => {
    await mongoose.connection.close()
    await store.close()
    server.close()
  })

  test('"/" route redirect to login page', async () => {
    const response = await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
    expect(response.text).toContain('<title>CloudTales Login</title>')
  })

  test('"/dashboard" route redirect to "/"', async () => {
    const response = await request(app)
      .get('/dashboard')
      .expect(302)
      .expect('Content-Type', /plain/)
    expect(response.text).toContain('Found. Redirecting to /')
  })

})

describe("Authentication", () => {

  beforeEach(async () => {
    await connectDB()
  })

  afterEach(async () => {
    await mongoose.connection.close()
    await store.close()
    server.close()
  })

  test("GET /auth/google", async () => {
    
  })
})