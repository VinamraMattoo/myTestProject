$(document).ready(function() {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://localhost:8082/TestSmsServerProject/GatewayJSON";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			populateFirstGatewayTable(xmlhttp.responseText);

		} else
			alert("Not loading");
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

});

function populateFirstGatewayTable(response) {
	var arr = JSON.parse(response);
	var gwarr = [ "MGAGE", "SECGW", "THGW", "FORTHGW" ];
	var out;
	var flag = 1;
	var priorityArr = [];

	var gwarr = [ "MGAGE", "SECGW", "THGW", "FORTHGW" ];
	out += "<table data-height=\" 300\" data-search-time-out=\"1\""
			+ "data-striped=\" true\" data-toggle=\"table\" data-search=\"true\""
			+ "data-click-to-select=\"true\">" + "<thead><tr>"
			+ "<th>Groups</th>" + "<th>MGAGE</th>" + "<th>SECGW</th>"
			+ "<th>THGW</th>" + "<th>FORTHGW</th></thead><tbody>";

	for (var i = 0; i < arr.length; i++) {
		out += "<tr><td>" + arr[i].name + "</td>";
		for (var k = 0; k < gwarr.length; k++) {
			for (var j = 0; j < arr[i].gwPriorities.length; j++) {
				if (arr[i].gwPriorities[j].name == gwarr[k]) {
					out += "<td  id=\"priorityId"
							+ i
							+ j
							+ "\"  >"
							+ arr[i].gwPriorities[j].priority
							+ "<span class=\"glyphicon glyphicon-edit\" onclick=\"closefun("
							+ i + "," + j + ")\" id=\"close\"></span>"
							+ "</td>";
					flag = 0;
				}

			}
			if (flag == 1) {
				out += "<td  id=\"priorityId"
						+ i
						+ k
						+ "\"  >"
						+ "NA"
						+ "<span class=\"glyphicon glyphicon-edit\" onclick=\"closefun("
						+ i + "," + k + ")\" id=\"close\"></span>" + "</td>";
			}
			flag = 1;
		}

		// priorityArr.push(arr[i].gwPriorities[j].name);

		out += "</tr>";
	}
	out += "</tbody></table>";

	/*
	 * 
	 * 
	 * for (var k = 0; k < gwarr.length; k++) { if (arr[i].gwPriorities[j].name ==
	 * gwarr[k]) { out += "<td id=\"priorityId" + i + j + "\" >" +
	 * arr[i].gwPriorities[j].priority + "<span class=\"glyphicon
	 * glyphicon-remove\" onclick=\"closefun(" + i + "," + j + ")\"
	 * id=\"close\"></span>" + "</td>"; flag = 1; } } if (flag != 1) { out += "<td
	 * id=\"priorityId" + i + j + "\" >" + "NA" + "<span class=\"glyphicon
	 * glyphicon-remove\" onclick=\"closefun(" + i + "," + j + ")\"
	 * id=\"close\"></span>" + "</td>"; }
	 * 
	 * 
	 * out += "</tr>";
	 * 
	 * out += "</tbody></table>";
	 */

	$('#GatewayPriorityTable1').append(out);

};
var priorityId;
function closefun(val1, val2) {

	priorityId = "priorityId" + String(val1) + String(val2);
	$('#editPriority').modal('show');

};

function changePriority() {

	var newVal = document.getElementById('newPriority');
	var ij = priorityId.slice(-2);
	alert(priorityId);
	var i = ij.slice(1);
	var j = ij.slice(-1);
	alert(ij + "," + i + "," + j);
	// alert(document.getElementById('priorityId').value);
	document.getElementById(priorityId).innerHTML = newVal.value
			+ "<span class=\"glyphicon glyphicon-edit\" onclick=\"closefun("
			+ i + "," + j + ")\" id=\"close\"></span>";
};

