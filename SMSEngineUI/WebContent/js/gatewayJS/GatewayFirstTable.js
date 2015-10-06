$(document).ready(function() {
	var xmlhttp = new XMLHttpRequest();
	var url = "../JSON/GatewayJSON.txt";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			populateFirstGatewayTable(xmlhttp.responseText);

		} else
			alert("Not loading");
	}
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
			+ "data-click-to-select=\"true\">" + "<thead><tr>"
			+ "<th><h2>Groups</h2></th>" + "<th><button id=\"gw1\" onclick=\"call_gw_property_edit()\" class=\"btn btn-success \">MGAGE <i class=\"glyphicon glyphicon-cog gly-spin\"></i></button></th>" + "<th><button onclick=\"call_gw_property_edit()\" id=\"gw2\" class=\"btn btn-success \">SECGW  <i class=\"glyphicon glyphicon-cog gly-spin\"></i></button></th>"
			+ "<th><button id=\"gw3\" onclick=\"call_gw_property_edit()\" class=\"btn btn-success \">THGW  <i class=\"glyphicon glyphicon-cog gly-spin\"></i></button></th>" + "<th><button onclick=\"call_gw_property_edit()\" id=\"gw4\" class=\"btn btn-success \">FORTHGW  <i class=\"glyphicon glyphicon-cog gly-spin\"></i></button></th></thead><tbody>";

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

		out += "</tr>";
	}
	out += "</tbody></table>";

	$('#GatewayPriorityTable1').append(out);

};
var priorityId;
function closefun(val1, val2) {

	priorityId = "priorityId" + String(val1) + String(val2);
	$('#editPriority').modal('show');
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

	var newVal = document.getElementById('newPriority');
	var i = priorityId.slice(10, 11);
	var j = priorityId.slice(11, 12);

	document.getElementById(priorityId).innerHTML = newVal.value
			+ "<span class=\"glyphicon glyphicon-edit\" onclick=\"closefun("
			+ i + "," + j + ")\" id=\"close\"></span>";
};
$(document).ready(function(){
    $("#gw1").click(function(){
        alert("The paragraph was clicked.");
    });
});
function call_gw_property_edit(){
	alert("hello");
};