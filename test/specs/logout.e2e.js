const { expect } = require('@wdio/globals');
const Login      = require('../pageobjects/login.page');
const Secure     = require('../pageobjects/secure.page');

describe('Logout flow', () => {
  it('logs out back to login page', async () => {
    await Login.open();
    await Login.login('tomsmith', 'SuperSecretPassword!');
    await Secure.logout();                        // click Logout button
    await expect(browser)
      .toHaveUrl(expect.stringContaining('login'))             // back on login URL
  });
});
