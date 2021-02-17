var departments = require('../departments.json');

exports.view = function(request, response){
	response.render('group-study', departments);
};