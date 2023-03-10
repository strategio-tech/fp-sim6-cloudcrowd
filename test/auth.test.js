import { ensureAuth } from '../middleware/auth'
import { ensureGuest } from '../middleware/auth'

import { jest, expect } from '@jest/globals'

describe('ensureAuth', () => {
  test('should call next() if the request is authenticated', () => {
    // Stub the req object
    const req = {
      isAuthenticated: () => true,
    }

    // Stub the res object
    const res = {
      redirect: (_path) => {},
    }

    // Spy on the redirect function
    const spy = jest.spyOn(res, 'redirect')

    // Call the ensureAuth function
    ensureAuth(req, res, () => {})

    // Assert that the redirect function was not called
    expect(spy).not.toHaveBeenCalled()
  })

  test("should redirect to '/' if the request is not authenticated", () => {
    // Stub the req object
    const req = {
      isAuthenticated: () => false,
    }

    // Stub the res object
    const res = {
      redirect: (_path) => {},
    }

    // Spy on the redirect function
    const spy = jest.spyOn(res, 'redirect')

    // Call the ensureAuth function
    ensureAuth(req, res, () => {})

    // Assert that the redirect function was called with the '/' path
    expect(spy).toBeCalledWith('/')
  })
  
  test('should call next() if the request is not authenticated', () => {
    // Stub the req object
    const req = {
      isAuthenticated: () => false,
    }

    // Stub the res object
    const res = {
      redirect: (_path) => {},
    }

    // Spy on the redirect function
    const spy = jest.spyOn(res, 'redirect')

    // Call the ensureGuest function
    ensureGuest(req, res, () => {})

    // Assert that the redirect function was not called
    expect(spy).not.toHaveBeenCalled()
  })

  test("should redirect to '/dashboard' if the request is authenticated", () => {
    // Stub the req object
    const req = {
      isAuthenticated: () => true,
    }

    // Stub the res object
    const res = {
      redirect: (_path) => {},
    }

    // Spy on the redirect function
    const spy = jest.spyOn(res, 'redirect')

    // Call the ensureGuest function
    ensureGuest(req, res, () => {})

    // Assert that the redirect function was called with the '/dashboard' path
    expect(spy).toHaveBeenCalledWith('/dashboard')
  })
})
