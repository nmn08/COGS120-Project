var groupStudy = require('../group-study.json');

exports.view = function(request, response){
    sess = request.session;
    if (!sess.userID) {
        response.redirect('/login');
    }
    var deptID = request.params.id;
    response.render('new-event', {name: sess.name, deptID:deptID});
};

exports.auth = function (req,res) {
    // console.log("Here");
    sess = req.session;
    
    var availID = groupStudy["availID"];
    var newEvent = {
        "id": availID,
        "department": req.body.deptID,
        "host": {
            "id": sess.userID,
            "name": sess.name
        },
        "class": req.body.course,
        "title": req.body.topic,
        "loc": req.body.loc,
        "time": req.body.time,
        "avail" : req.body.avail,
        "desc": req.body.desc,
        "attendants": []
    }
    // console.log(newEvent);
    groupStudy["groups"].push(newEvent);
    groupStudy["availID"] += 1;
    console.log(newEvent);
    res.send({status:"done", id:availID})
    res.end();
};