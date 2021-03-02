var groupStudy = require('../group-study.json');

exports.view = function(request, response){
    sess = request.session;
    hostID = sess.userID;
    if (!sess.userID) {
        response.redirect('/login');
    }
    var id = request.params.id;
    var data = groupStudy["groups"];
    var isHost, isAttorFull;
    var obj;
    for(var i = 0; i < data.length; i++) {
        obj = data[i];
        if (obj["id"] == id) {
            // console.log(obj);
            // Check if this is a host
            console.log("Here " + obj["host"]["id"] + " and " + hostID);
            if (obj["avail"] == 0)
                isAttorFull = true;
            if (obj["host"]["id"] == hostID)
                isHost = true;
            else {
                isHost = false;
                // Check if this is a guest
                for (var j = 0; j < obj["attendants"].length; j++) {
                    var att = obj["attendants"][j];
                    console.log(att["id"] + " and " + hostID)
                    if (att["id"] == hostID) {
                        isAttorFull = true;
                        break;
                    }  
                }
            }
            break;
        }
    }

    response.render('event', {data: obj, isHost:isHost, id:id, deptID: obj['department'],
    hostID:hostID, isAttorFull:isAttorFull,isNew:false});
};