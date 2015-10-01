$(document).ready(function() {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://localhost:8082/TestSmsServerProject/TemplateConfig";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			populateFirstTemplateTable(xmlhttp.responseText);
			populateSecondTemplateTable(xmlhttp.responseText);
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
			+ "<caption style=\"border: inherit; background-color: lightgrey;\">"
			+ "<span class=\"align-left\"><strong>Types</strong></span>"
			+ "</caption>"
			+ "<thead>"
			+ "<tr>"
			+ "<th data-sortable=\"true\">Types</th>"
			+ "<th data-field=\"operate\" data-formatter=\"operateFormatter\""
			+ "data-events=\"operateEvents\">Options</th></tr></thead>"
			+ "<tbody>";

	for (var i = 0; i < arr.length; i++) {

		out += "<tr>" + "<td><strong>" + arr[i].name
		"</strong></td></tr>";

	}

	out += "</tbody>" + "</table>";

	$("#TemplateFirstTable").append(out);

};

