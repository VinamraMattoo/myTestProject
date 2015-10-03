/*$(document)
		.ready(
				function() {
					var out = "<table  style=\"background-color: white\" data-toggle=\"table\" >";
					out += "<thead ><tr><th>Groups</th><th></th></tr></thead><tbody>";

					for (var i = 0; i < groups.length; i++) {
						temp = i + 1;
						out += "<tr><td>"
								+ groups[i].Gname
								+ "</td><td>"
								+ "<input type=\"checkbox\" class=\"radio\" onclick=groupSelection(\""
								+ temp + "\") name=\"group" + i
								+ "value=\"group\"></td>"

						"</tr>";

					}
					out += "</tbody></table>";

					$("#gatewayFirstTable").append(out);
				});

var groupSelected;
var gatewaySelected;
function gatewaySelection(gatewayNo) {
	if (gatewaySelected == gatewayNo) {
		gatewaySelected = "";
		return;
	} else {
		gatewaySelected = gatewayNo;

	}
};

function groupSelection(groupSelectedNo) {
	if (groupSelected == groupSelectedNo) {
		groupSelected = "";
		alert(groupSelected);
		return;
	} else {
		groupSelected = groupSelectedNo;

	}
};

function mapGroupToGateway(priority) {
	if ((groupSelected != null) && (gatewaySelected != null)) {
		alert(groupSelected);
		alert(gatewaySelected);

	} else {
		alert("please select a group and a gateway");
		return;
	}
}*/