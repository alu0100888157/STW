module.exports = {
    // Development configuration options
    // Connection URI
    db: 'mongodb://localhost/stw-project',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: 'Application Id', // replace Aplication Id with your facebook application's ID
        clientSecret: 'Application Secret', // " " " "  secret
        // The callbackURL property will be passed to the Facebook OAuth service, which will
        // redirect to that URL after the authentication process is over. Make sure the callbackURL
        // property matches the callback settings that you've set in the developer's home page.
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    }
};