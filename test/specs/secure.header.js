const { expect } = require('@wdio/globals');
const Login      = require('../pageobjects/login.page');
const Secure     = require('../pageobjects/secure.page');

describe('Secure Area UI', () => {
  it('displays the expected header text after login', async () => {
    await Login.open();
    await Login.login('tomsmith', 'SuperSecretPassword!');
    await expect($('h2=Secure Area')).toBeDisplayed();
    await expect($('h2=Secure Area')).toHaveText('Secure Area');
  });
});
