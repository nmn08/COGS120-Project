'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	var email,pass;
    $("#submit").click(function(){
        email=$("#email").val();
        pass=$("#password").val();
        /*
        * Perform some validation here.
        */
        $.post("/login/auth",{email:email,pass:pass},function(data){
            if(data==='done') {
                window.location.href="/";
            } else {
				window.location.href="/login";
				alert("Your provided information is incorrect!!!");
			}
        });
    });
})

