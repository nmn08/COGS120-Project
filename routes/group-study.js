var departments = require('../departments.json');

exports.view = function(request, response){
	sess = request.session;
    if (!sess.userID) {
        response.redirect('/login');
    }
	response.render('group-study', departments);
};