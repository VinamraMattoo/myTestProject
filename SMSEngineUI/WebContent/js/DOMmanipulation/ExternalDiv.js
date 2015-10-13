$(document).ready(function() {
	 /* $('[data-toggle="tooltip"]').tooltip(); */
	$.get("../HTML/PresentSystemData.html", function(data) {
		$("#systemConfig").append(data);
	});
	return false;
});

$(document).ready(function() {
	$.get("../HTML/PresentGatewayData.html", function(data) {
		$("#gatewayConfig").append(data);
	});
	return false;
});

$(document).ready(function() {
	$.get("../HTML/PieChartModal.html", function(data) {
		$("#bodyId").append(data);
	});
	return false;
});

$(document).ready(function() {
	$.get("../HTML/PresentTemplateData.html", function(data) {
		$("#templateConfig").append(data);

	});
	return false;
});
$('#gatewayChangeSubmit').click(function() {
	location.reload();
});

$('#SubmitPopUp').click(function() {
	setTimeout("displayCancel()", 7000);
});
function displayCancel() {
	var cancelHtml = '<h1 >Connection seems to taking too long press cancel to abort</h1>'
			+ '<br>'
			+ '<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>';

	$("#CancelLoading").append(cancelHtml);

}
