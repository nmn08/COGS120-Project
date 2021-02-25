var accounts = require('../accounts.json');

exports.view = function(request, response){
  response.render('login');
};

exports.auth = function (req,res) {
  sess = req.session;
  sess.email = req.body.email;
  sess.pass = req.body.pass;
  
  var data = accounts["accounts"];
  for(var i = 0; i < data.length; i++) {
      var obj = data[i];
      if (obj["email"] == sess.email && obj["pass"] == sess.pass) {
        // console.log(sess.email + " and " + sess.pass);
        sess.name = obj["name"];
        sess.userID = obj["id"];
        res.end('done');
      }
  }
  res.end('fail');
  // res.end('done');
};