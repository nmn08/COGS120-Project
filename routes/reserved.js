/*
 * GET home page.
 */
var groupStudy = require('../group-study.json');
var accounts = require('../accounts.json');

exports.view = function(request, response){
  sess = request.session;
  if (!sess.userID) {
      response.redirect('/login');
  }
  var id = request.params.id;
  var hostID = sess.userID;
  var data = groupStudy["groups"];
  var accData = accounts["accounts"];
  var newAtt = {};
  var retVal = {
    "alreadyAdded" : false,
    "name": ""
  };
  for(var i = 0; i < accData.length; i++) {
      var obj = accData[i];
      if (obj["id"] == hostID) {
          newAtt = {
              "id": hostID,
              "name": obj["name"]
          }
          retVal["name"] = obj["name"];
          break;
      }
  }
  // Find the group
  for(var i = 0; i < data.length; i++) {
      var obj = data[i];
      // console.log(obj["class"].toLowerCase() + " and " + keyword);
      if (obj["id"] == id) {
          if (obj["id"] == hostID) {
              retVal["alreadyAdded"] = true;
          } else {
              obj["attendants"].push(newAtt);
              //Decrease the availability
                obj["avail"] -= 1;
          }
          break;
      }
  }
  
  response.json(retVal);
};



