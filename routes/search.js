/*
 * GET home page.
 */
var groupStudy = require('../group-study.json');

exports.view = function(request, response){
  sess = request.session;
  if (!sess.userID) {
      response.redirect('/login');
  }
  var keyword = request.query['search'].toLowerCase();
  var data = groupStudy["groups"];
  var retVal = {"groups":[]};
  var isFound = false;
  for(var i = 0; i < data.length; i++) {
    var obj = data[i];
    // console.log(obj["class"].toLowerCase() + " and " + keyword);
    if (obj["class"].toLowerCase() == keyword) {
        retVal["groups"].push(obj);
        isFound = true;
    }
  }
  response.render('search', {data: {isFound: isFound, groups: retVal, keyword:keyword.toUpperCase()}});
};
