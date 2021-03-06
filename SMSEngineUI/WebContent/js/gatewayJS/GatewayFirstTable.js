$(document).ready(function() {
	var xmlhttp = new XMLHttpRequest();
	var url = "../JSON/GatewayJSON.txt" + "?JSESSIONID=" + ($("#sessionId").text());

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			populateFirstGatewayTable(xmlhttp.responseText);

		} else
			alert("why?");
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

});
var Jsonarr;
function populateFirstGatewayTable(response) {
	var arr = JSON.parse(response);
	Jsonarr = arr;
	var gwarr = [ "MGAGE", "SECGW", "THGW", "FORTHGW" ];
	var out;
	var flag = 1;
	var priorityArr = [];

	out += "<table data-height=\" 300\" data-search-time-out=\"1\""
			+ "data-striped=\" true\" class=\"table\" data-search=\"true\""
			+ "data-click-to-select=\"true\">"
			+ "<thead><tr>"
			+ "<th>Groups</th>"
			+ "<th><button class=\"btn btn-success btn-sm\" onclick=\"editGatewayProperties(1)\">MGAGE</button></th>"
			+ "<th><button class=\"btn btn-success btn-sm\" onclick=\"editGatewayProperties(2)\">SECGW</button></th>"
			+ "<th><button class=\"btn btn-success btn-sm\" onclick=\"editGatewayProperties(3)\">THGW</button></th>"
			+ "<th><button class=\"btn btn-success btn-sm\" onclick=\"editGatewayProperties(4)\">FORTHGW</button></th></thead><tbody>";

	for (var i = 0; i < arr.length; i++) {
		out += "<tr><td>" + arr[i].name + "</td>";

		for (var k = 0; k < gwarr.length; k++) {

			if (gwarr[k] == arr[i].gwPriorities[k].name) {
				out += "<td  id=\"priorityId"
						+ i
						+ k
						+ "\"  >"
						+ arr[i].gwPriorities[k].priority
						+ "<span class=\"glyphicon glyphicon-edit\" onclick=\"closefun("
						+ i + "," + k + "," + 1 + ")\" id=\"close\"></span>"
						+ "</td>";

			} else {
				out += "<td  id=\"priorityId"
						+ i
						+ k
						+ "\"  >"
						+ "NA"
						+ "<span class=\"glyphicon glyphicon-edit\" onclick=\"closefun("
						+ i + "," + k + "," + 0 + ")\" id=\"close\"></span>"
						+ "</td>";
			}
		}

		out += "</tr>";
	}

	out += "</tbody></table>";

	$('#GatewayPriorityTable1').append(out);

};
var priorityId;
function closefun(val1, val2, flag) {

	priorityId = "priorityId" + String(val1) + String(val2);

	if (flag == 1) {
		document.getElementById('newPriority').value = Jsonarr[val1].gwPriorities[val2].priority;
	} else {
		document.getElementById('newPriority').value = "NA";
	}

	$('#editPriority').modal('show');
	sendPriorityAJAX(val1, val2);

};

function validateInput() {
	var x = document.getElementById("newPriority").value;
	var flag;
	var i = priorityId.slice(10, 11);
	var arr = Jsonarr;

	for (var j = 0; j < arr[i].gwPriorities.length; j++) {
		if (x == arr[i].gwPriorities[j].priority)
			flag = 1;
	}
	if (flag == 1) {
		$("#InfoMsg").toggle();
		document.getElementById('InfoMsg').innerHTML = "Priority already taken! Please try another value";
		document.getElementById('updatePriority').disabled = true;
		$("#InfoMsg").show();
	} else {
		document.getElementById('updatePriority').disabled = false;
		$("#InfoMsg").hide();
	}
};
function changePriority() {

	var data = $('#priorityDiv').map(function() {
		return {
			gid : $(this).find('[name="gid"]').val(),
			gwid : $(this).find('[name="gwid"]').val(),
			value : $(this).find('[name="value"]').val(),
		};
	}).get();
	alert(JSON.stringify(data));

	/* do a ajax call here and check the status from the server */

	var newVal = document.getElementById('newPriority');
	var i = priorityId.slice(10, 11);
	var j = priorityId.slice(11, 12);

	if (newVal.value > 0) {
		document.getElementById(priorityId).innerHTML = newVal.value
				+ "<span class=\"glyphicon glyphicon-edit\" onclick=\"closefun("
				+ i + "," + j + ")\" id=\"close\"></span>";
	} else {
		document.getElementById(priorityId).innerHTML = "NA"
				+ "<span class=\"glyphicon glyphicon-edit\" onclick=\"closefun("
				+ i + "," + j + ")\" id=\"close\"></span>";
	}

};
function sendPriorityAJAX(i, j) {
	var arr = Jsonarr;
	var groupID = arr[i].id;
	var gatewayID = arr[i].gwPriorities[j].id;
	var out = "<input  type=\"hidden\" name=\"gid\" value=\"" + groupID + "\">"
			+ "<input type=\"hidden\" name=\"gwid\" value=\"" + gatewayID
			+ "\">";
	$('#PriorityHidden').empty().append(out);

};
function editGatewayProperties(gatewayId) {
	var xmlhttp = new XMLHttpRequest();
	var url = "../JSON/GatewayProperties.txt";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			populateEditGatewayProperty(xmlhttp.responseText, gatewayId);

		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
};
function populateEditGatewayProperty(response, gatewayId) {
	var arr = JSON.parse(response);
	var out;


	for (var i = 0; i < arr.length; i++) {
		if (gatewayId == arr[i].id) {

			out += "<input  type=\"hidden\" name=\"id\" value=\"" + arr[i].id
					+ "\">";
			out += "<input name=\"key1\" class=\"form-control\"" + "value="
					+ "\"" + arr[i].key1 + "\" />";
			out += "<input name=\"key2\" class=\"form-control\"" + "value="
					+ "\"" + arr[i].key2 + "\" />";
			out += "<input name=\"key3\" class=\"form-control\"" + "value="
					+ "\"" + arr[i].key3 + "\" />";
			
			break;
		}
	}

	$('#gatewayEditPop').empty().append(out);

	$('#editGatewayProperty').modal('show');
};