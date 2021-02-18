var groupStudy = require('../group-study.json');

exports.view = function(request, response){
    var id = request.params.id;
    var data = groupStudy["groups"];
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
        if (obj["id"] == id) {
            console.log(obj);
            response.render('event', obj);
        }
    }
};