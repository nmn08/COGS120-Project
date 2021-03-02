
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function reserve(id) {
	var url = "/reserved/" + id
	$.get(url, callBackFn);
}

function share(id) {
    $("#btn-close").click(close);
    $("#myModal").show();
    var url = window.location.href
    const { hostname } = new URL(url);
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = hostname + "/event/" + id;
    dummy.select();
    document.execCommand("copy");
    $("#modal-body").html("The sharing URL for the group study is successfully copied to your clipboard!");
    document.body.removeChild(dummy);
}

function close() {
    $("#myModal").hide();
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