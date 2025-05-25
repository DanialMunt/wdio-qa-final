const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    get logoutBtn () { return $('a.button[href="/logout"]'); }

  /* ② wait until it’s actually in the DOM & clickable */
  async logout () {
    await this.logoutBtn.waitForClickable({ timeout: 5000 });
    await this.logoutBtn.click();
 
  }
}

module.exports = new SecurePage();
