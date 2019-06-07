var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/authentication/portal/FR')   // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
            browser.assert.elementPresent("head > title")
            .assert.elementPresent("#txtEmail")
            .elementPresent("#txtPassword")
            .elementPresent("#btSubmit")
            .elementPresent("#signUpLink")
            .click("#signUpLink")
            .waitForElementVisible('body',1000); // wait for the body to be rendered
        }
      });
    // part two:
    browser
        
        .assert.elementPresent("head > title")
        .urlEquals('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
        .elementPresent('#mainForm > fieldset > div:nth-child(2) > div:nth-child(2) > label')
        .elementPresent('#mainForm > fieldset > div:nth-child(2) > div:nth-child(3) > label')
        .elementPresent('#txtLastName')
        .elementPresent('#txtFirstName')
        .elementPresent('#txtMail')
        .elementPresent('#txtPassword')
        .elementPresent('#mainForm > div:nth-child(2) > div')
        .elementPresent('#registerBt')
        .click('#registerBt')
        .elementPresent('#CivilityValidate')
        .elementPresent('#txtFirstNameValidate')
        .elementPresent('#txtLastNameValidate')
        .elementPresent('#txtMailValidate')
        .elementPresent('#txtPasswordValidate')
        .click('#mainForm > fieldset > div:nth-child(2) > div:nth-child(2)')
        .expect.element('#mainForm > fieldset > div:nth-child(2) > div:nth-child(2)').value.to.equal('Homme')
        .setValue('#txtLastName', 'eiofe')
        .expect.element('#txtLastName').value.to.equal('eiofe')
        .setValue('#txtFirstName', 'dosfmsd')
        .expect.element('#txtFirstName').value.to.equal('dosfmsd')
        .setValue('#txtMail', 'toto@yopmail.com')
        .expect.element('#txtMail').value.to.equal('toto@yopmail.com')
        .setValue('#txtPassword', '29111996@')
        .expect.element('#txtPassword').value.to.equal('29111996@')
        .click('#mainForm > div:nth-child(2) > div')
        .click('#registerBt')
        .waitForElementVisible('body',1000)
        .end();
    }
  };
  