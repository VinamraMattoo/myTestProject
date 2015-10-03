$("#GatewayConfig").click(function() {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://localhost:8082/TestSmsServerProject/GatewayJSON";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			populateFirstGatewayTable(xmlhttp.responseText);

		} else
			alert("Not loading")
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

});

function populateFirstGatewayTable(response) {
	var arr = JSON.parse(response);
	var out;
	var gwarr = [ "MGAGE", "SECGW", "THGW", "FORTHGW" ];
	out += "<table data-height=\" 300\" data-search-time-out=\"1\""
			+ "data-single-select=\"true\" data-select-item-name='checkbox'"
			+ "data-striped=\" true\" data-toggle=\"table\" data-search=\"true\""
			+ "data-show-toggle=\"true\"" + "data-click-to-select=\"true\">"
			+ "<thead><tr>" + "<th>Groups</th>" + "<th>MGAGE</th>"
			+ "<th>SECGW</th>" + "<th>THGW</th>"
			+ "<th>FORTHGW</th></thead><tbody>";

	for (var i = 0; i < arr.length; i++) {
		out += "<tr><td>" + arr[i].name + "</td>";
		for (var j = 0; j < arr[i].gwPriorities.length; j++) {
			for (var k = 0; k < gwarr.length; k++) {
				if (arr[i].gwPriorities[j].name == gwarr[k]) {
					out += "<td  id=\"priorityId"
							+ i
							+ j
							+ "\"  >"
							+ arr[i].gwPriorities[j].priority
							+ "<span class=\"glyphicon glyphicon-remove\" onclick=\"closefun("
							+ i + "," + j + ")\" id=\"close\"></span>"
							+ "</td>";
					continue;
				}
			}
			out += "<td id=\"priorityId"
					+ i
					+ j
					+ "\"  >"
					+ "NA"
					+ "<span class=\"glyphicon glyphicon-remove\" onclick=\"closefun("
					+ i + "," + j + ")\" id=\"close\"></span>" + "</td>";

		}
		out += "</tr>";
	}
	out += "</tbody></table>";

	$('#GatewayPriorityTable1').append(out);

};
function closefun(val1, val2) {

	var temp = "priorityId" + String(val1) + String(val2);

	document.getElementById(temp).innerHTML = "NA";

};

