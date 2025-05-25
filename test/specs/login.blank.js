const { expect } = require('@wdio/globals');
const Login = require('../pageobjects/login.page');

describe('Login – edge case', () => {
  it('shows error when credentials are blank', async () => {
    await Login.open();
    await Login.login('', '');                     // both fields empty
    await expect(Login.flashAlert).toBeDisplayed();
    await expect(Login.flashAlert).toHaveText(
      expect.stringContaining('Your username is invalid'));
  });
});
