
/**
 * Module dependencies.
 */

var express = require('express');
var session = require('express-session');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var grStudy = require('./routes/group-study');
var dept = require('./routes/departments');
var event = require('./routes/event');
var hosts = require('./routes/hosts');
var savedEvents = require('./routes/saved-events');
var history = require('./routes/history');
var newEvent = require('./routes/new-event');
var reserved = require('./routes/reserved');
var share = require('./routes/share');
var search = require('./routes/search');
var login = require('./routes/login');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Find Your Group Study'));
// app.use(express.session());
app.use(session({secret: 'cogs120team15'}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/group-study', grStudy.view);
app.get('/hosts', hosts.view);
app.get('/saved-events', savedEvents.view);
app.get('/history', history.view);
app.get('/dept/:dept', dept.view);
app.get('/event/:id', event.view);
app.get('/new-event/:id', newEvent.add);
app.get('/reserved/:id', reserved.view);
app.get('/share', share.view);
app.get('/search', search.view);
app.get('/login', login.view);
app.post('/login/auth',login.auth);
app.post('/new-event/auth',newEvent.auth);
app.get('/new-event/view/:id',newEvent.view);
app.get('/logout',(req,res)=>{
  req.session.destroy(function (err) {
    res.redirect('/login'); 
   });
})
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
