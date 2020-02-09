import { expect } from 'detox'

describe('Sign In', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show sign in form', async () => {
    await expect(element(by.id('testId/sign-in-form'))).toBeVisible()
  })
})
