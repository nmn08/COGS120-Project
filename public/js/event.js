
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function reserve(id) {
	var url = "/reserved/" + id
	$.get(url, callBackFn);
}

function callBackFn(result) {
    console.log(result);
    if(result["alreadyAdded"]) {
        alert("You are already in this group study!");
    } else {
        var projectHTML = 
        '<input type="text" readonly class="form-control-plaintext" value="' + result['name'] + '">';

        $("#att").append(projectHTML);
        // Change Avail.
        var att = $("#avail").val();
        $("#avail").val(parseInt(att) - 1);
        // Change button to Reserverd
        $("#btn-reserve").prop('disabled', true);
        $("#btn-reserve").html(" Reserved");
        alert("You successfully register for this group study!");
    }
}