var g1 = [ {
	gatewayName : "gate1",
	priority : "3"
}, {
	gatewayName : "gate2",
	priority : "2"
}, {
	gatewayName : "gate3",
	priority : "1"
}, {
	gatewayName : "gate4",
	priority : "5"
} ];

var g2 = [ {
	gatewayName : "gate1",
	priority : "3"
}, {
	gatewayName : "gate2",
	priority : "2"
}, {
	gatewayName : "gate3",
	priority : "1"
}, {
	gatewayName : "gate4",
	priority : "5"
} ];

var g3 = [ {
	gatewayName : "gate1",
	priority : "3"
}, {
	gatewayName : "gate2",
	priority : "2"
}, {
	gatewayName : "gate3",
	priority : "1"
}, {
	gatewayName : "gate4",
	priority : "5"
} ];

var g4 = [ {
	gatewayName : "gate1",
	priority : "3"
}, {
	gatewayName : "gate2",
	priority : "2"
}, {
	gatewayName : "gate3",
	priority : "1"
}, {
	gatewayName : "gate4",
	priority : "5"
} ];

var groups = [ {
	gid : g1,
	Gname : "group1"
}, {
	gid : g2,
	Gname : "group2"
}, {
	gid : g3,
	Gname : "group3"
}, {
	gid : g4,
	Gname : "group4"
} ];

// myFunction1(xmlhttp.responseText);
/*
 * xmlhttp.onreadystatechange = function() { if (xmlhttp.readyState == 4 &&
 * xmlhttp.status == 200) { myFunction1(xmlhttp.responseText); } }
 * xmlhttp.open("GET", url, true); xmlhttp.send();
 */
/* function myFunction1(response) { */

// var arr = JSON.parse(response);
function gatewayTable1Function() {
	var i;

	/*
	 * var out = "<table class=\"table table-striped\"
	 * data-row-style=\"rowStyle\">"; out += "<thead><tr><td>" + "Name" + "</td><td>" +
	 * "Value" + "</td></tr></thead>";
	 */
	var out;
	for (var i = 0; i < groups.length; i++) {
		out += "<tr><td>" + groups[i].Gname + "</td>";
		for (var j = 0; j < groups[i].gid.length; j++) {
			/*
			 * temp = "onmouseover=\"<span class=\"glyphicon glyphicon-remove\"
			 * onclick=\"closefun(" + i + "," + j + ")\" id=\"close\"></span>";
			 *//*
				 * temp = "onmouseover=\"alert(\"hey\")\"";
				 * onmouseover=\"toggle('hidden1')\"
				 */
			// alert(i+","+j+","+groups[i].gid[j].priority)
			out += "<td  onmouseover=\"alert(\"hey\")\" id=\"priorityId"
					+ i
					+ j
					+ "\"  >"
					+ groups[i].gid[j].priority 
					+ "<span class=\"glyphicon glyphicon-edit\" title=\"Edit\"></span>"
					+ "  "
					+ "<br><span class=\"glyphicon glyphicon-remove\" onclick=\"closefun("
					+ i + "," + j + ")\" id=\"close\"></span>" + "</td>";

		}
		out += "<td></td></tr>";
	}
	out += "</table>";

	$('#GatewayF1Table').append(out);

};
function closefun(val1, val2) {

	var temp = "priorityId" + String(val1) + String(val2);

	document.getElementById(temp).innerHTML = "NA";

};

