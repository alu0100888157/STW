exports.render = function(req, res) {

    // The session middleware adds a session object to all request objects
    // in your application.
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    // render function
    // first argument: name of your EJS template
    res.render('index', {
        title: 'Hello world',
        userFullName: req.user ? req.user.fullName : ''
    });
};