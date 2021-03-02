var groupStudy = require('../group-study.json');

exports.view = function(request, response){
    sess = request.session;
    if (!sess.userID) {
        return response.redirect('/login');
    }
    var userID = sess.userID;

    var data = groupStudy["groups"];
    var retVal = {"groups":[]};

    // Find all course in the department
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
        for(var j = 0; j < obj["attendants"].length; j++) {
          if (obj["attendants"][j]["id"] == userID) {
            retVal["groups"].push(obj)
          }
        }  
    }

  response.render('history', { data: { groups: retVal} });
}