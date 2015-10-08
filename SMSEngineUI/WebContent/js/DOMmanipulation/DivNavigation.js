var displayId;
var previousId = null;
$(document).ready(function() {
	displayUpdate('systemConfig');
});

$('#SysConfig').click(function() {
	displayUpdate('systemConfig');
});

$('#GatewayConfig').click(function() {
	displayUpdate('gatewayConfig');
});
$('#TemplateConfig').click(function() {
	displayUpdate('templateConfig');
	$("#templateTable2").empty();
	$("#TemplateThirdTable").empty();
});


var DivIdArray = [ "systemConfig", "gatewayConfig", "templateConfig"/* ,"updateSystem" */];

var FormIdArray = [ "updateTemplate" ];

function myFunction() {
	var x;
	if (confirm("Press a button!") == true) {
		x = "You pressed OK!";
	} else {
		x = "You pressed Cancel!";
	}
	document.getElementById("demo").innerHTML = x;
};

function displayUpdate(ElementId) {
	var div = document.getElementById(ElementId);
	displayId = ElementId;
	for (var i = 0; i < FormIdArray.length; i++) {
		if (previousId != null && previousId == FormIdArray[i]) {
			if (confirm("Do you wish to proceed! Press ok to continue") == true) {
				previousId = ElementId;
				continue;
			} else {
				return;
			}
		}
	}
	previousId = ElementId;
	div.style.display = "block";
	hideOthers(ElementId);
}

function hideOthers(CurrentId) {
	for (var i = 0; i < DivIdArray.length; i++) {
		if (CurrentId == DivIdArray[i])
			continue;
		else
			document.getElementById(DivIdArray[i]).style.display = "none";
	}
}
