exports.render = function(req, res) {
    // RENDERING THE USER OBJECT
    const user = (!req.user) ? null : {
        _id: req.user.id,
        firtName: req.user.firstName,
        lastName: req.user.lastName
    };
    res.render('index', {
        title: 'Hello world',
        user: JSON.stringify(user)
    });
};