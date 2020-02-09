describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show welcome screen', async () => {
    await expect(element(by.text('Hello! 👋'))).toBeVisible()
  })
})
