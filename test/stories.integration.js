import mongoose from 'mongoose'
import supertest from 'supertest'

import { jest } from '@jest/globals'
import { app, server } from '../app'


jest.useFakeTimers()

const api = supertest(app)

test('Returned HTML', async () => {
  await api
    .get('/stories')
    .expect(404)
    .expect('Content-Type', /text\/html/)
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
