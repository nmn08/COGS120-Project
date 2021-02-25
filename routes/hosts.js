/*
 * GET home page.
 */

exports.view = function(request, response){
  sess = request.session;
  if (!sess.userID) {
      response.redirect('/login');
  }
  response.render('hosts');
};
