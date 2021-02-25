'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    var course,topic,time,loc,avail,desc, deptID;
    $("#addEvent").click(function(){
        course = $("#class").val();
        topic = $("#topic").val();
        time = $("#time").val();
        loc = $("#loc").val();
        avail = $("#avail").val();
        desc = $("#desc").val();
        deptID = $("#deptID").val();
        /*
        * Perform some validation here.
        */
        $.post("/new-event/auth",
        {
            deptID: deptID,
            course:course,
            topic:topic,
            time:time,
            loc:loc,
            avail:avail,
            desc:desc
        },
        function(data){
            if(data.status==='done') {
                window.location.href="/event/" + data.id;
            }
        });
    });
})

