$(document).ready(function() {
	var xmlhttp = new XMLHttpRequest();
	var url = "../JSON/templateJSON.txt";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			populateFirstTemplateTable(xmlhttp.responseText);
			populateSecondTemplateTable(xmlhttp.responseText);
			populateThirdTemplateTable(xmlhttp.responseText);
		}
		
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

});

function populateFirstTemplateTable(response) {
	var arr = JSON.parse(response);
	var out;

	out += " <table id=\"firstTempTable\" data-height=\" 300\" data-search-time-out=\"1\""
			+ "data-striped=\" true\""
			+ "data-toggle=\"table\" data-search=\"true\" >"
			+ "<thead>"
			+ "<tr>"
			+ "<th data-sortable=\"true\">Types</th>"
			+ "<th>Options</th></tr></thead>"
			+ "<tbody>";

	for (var i = 0; i < arr.length; i++) {

		out += "<tr>" + "<td><strong>" + arr[i].name
		+"</strong></td><td><button onclick=\"EditTypeProp()\">Edit</td></tr>";

	}

	out += "</tbody>" + "</table>";

	$("#TemplateFirstTable").append(out);

};
function EditTypeProp()
{
	alert("comin here");
};