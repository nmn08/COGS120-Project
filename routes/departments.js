var groupStudy = require('../group-study.json');
var departments = require('../departments.json');

exports.view = function(request, response){
    sess = request.session;
    if (!sess.userID) {
        return response.redirect('/login');
    }
    var dept = request.params.dept;
    var deptName;
    console.log(dept);
    var data = groupStudy["groups"];
    var retVal = {"groups":[]};
    // Find the name of the department
    var depts = departments["departments"];
    for (var i = 0; i < depts.length; i++) {
        if (depts[i]["id"] == dept) {
            deptName = depts[i]["department"];
            break;
        }
    }
    // Find all course in the department
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
        if (obj["department"] == dept)
            retVal["groups"].push(obj)
    }

    console.log(retVal);
    console.log(dept);
	response.render('dept', { data: { groups: retVal, dept: deptName, deptID:dept} });
};