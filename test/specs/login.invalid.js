const { expect } = require('@wdio/globals');
const Login = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page')
describe('Login – negative', () => {
  it('shows error for wrong password', async () => {
    await Login.open();
    await Login.login('tomsmith', 'WrongPassword!');
    await expect(SecurePage.flashAlert).toBeExisting()
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining('Your password is invalid!'))

  })
});
