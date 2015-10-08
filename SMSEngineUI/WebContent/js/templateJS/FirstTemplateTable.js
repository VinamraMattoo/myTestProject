$(document).ready(function() {
	callServer();
});

function callServer() {
	var xmlhttp = new XMLHttpRequest();
	var url = "../JSON/templateJSON.txt";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			populateFirstTemplateTable(xmlhttp.responseText);
			populateSecondTemplateTable(xmlhttp.responseText);
			populateThirdTemplateTable(xmlhttp.responseText);
		}

	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

};

var JsonArray;
function populateFirstTemplateTable(response) {
	var arr = JSON.parse(response);
	var out;
	JsonArray = arr;

	out += " <table id=\"firstTempTable\" data-height=\" 300\" data-search-time-out=\"1\""
			+ "data-striped=\" true\""
			+ "data-toggle=\"table\" data-search=\"true\" >"
			+ "<thead>"
			+ "<tr>"
			+ "<th data-sortable=\"true\">Types</th>"
			+ "<th>Options</th></tr></thead>" + "<tbody>";

	for (var i = 0; i < arr.length; i++) {

		out += "<tr>"
				+ "<td><strong>"
				+ arr[i].name
				+ "</strong></td><td><button class=\"btn btn-primary btn-sm\" onclick=\"EditTypeProp("
				+ arr[i].id + ")\">Edit</td></tr>";

	}

	out += "</tbody>" + "</table>";

	$('#TemplateFirstTable').html(out);

};
function EditTypeProp(id) {
	var arr = JsonArray;
	var out;
	for (var i = 0; i < arr.length; i++) {
		if (id == arr[i].id) {

			out += "<div class=\"typifields\">"
					+ "<input type=\"hidden\" name=\"id\" value=" + id + ">";

			if (arr[i].cpContentMatchType == "ABSOLUTE_PERIOD") {
				out += "<select "
						+ "class=\"form-control text-center\" name=\"cpContentMatchType\">"
						+ "<option value=\"CALENDAR_DAY\">CALENDAR DAY</option>"
						+ "<option value=\"ABSOLUTE_PERIOD\" selected>ABSOLUTE PERIOD</option>"
						+ "</select>";
			} else {
				out += "<select "
						+ "class=\"form-control text-center\" name=\"cpContentMatchType\">"
						+ "<option value=\"CALENDAR_DAY\" selected>CALENDAR DAY</option>"
						+ "<option value=\"ABSOLUTE_PERIOD\" >ABSOLUTE PERIOD</option>"
						+ "</select>";
			}

			out += " <input type=\"text\" class=\"form-control\" name=\"cpContentMatchValue\" value="
					+ arr[i].cpContentMatchValue + ">";

			if (arr[i].cpTypeMatchType == "ABSOLUTE_PERIOD") {
				out += " <select "
						+ "class=\"form-control text-center\" name=\"cpTypeMatchType\">"
						+ "<option value=\"CALENDAR_DAY\">CALENDAR DAY</option>"
						+ "<option value=\"ABSOLUTE_PERIOD\" selected>ABSOLUTE PERIOD</option>"
						+ "</select>";
			} else {
				out += " <select "
						+ "class=\"form-control text-center\" name=\"cpTypeMatchType\">"
						+ "<option value=\"CALENDAR_DAY\"selected>CALENDAR DAY</option>"
						+ "<option value=\"ABSOLUTE_PERIOD\" >ABSOLUTE PERIOD</option>"
						+ "</select>";
			}

			out += " <input type=\"text\" class=\"form-control\" name=\"cpTypeMatchValue\" value="
					+ arr[i].cpTypeMatchValue + ">" + "</div>";

		}
	}
	$('#typeEditPop').empty().append(out);

	$('#editTypeProperty').modal('show');

};