function populateSecondTemplateTable(response) {

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
			+ "<th data-sortable=\"true\">Type</th>"
			+ "<th data-sortable=\"true\">Group</th>"
			+ "<th data-sortable=\"true\">Values</th></tr></thead>" + "<tbody>";

	for (var i = 0; i < arr.length; i++) {
		alert(arr[i].smsGroupVOs.length);
		for (var j = 0; j < arr[i].smsGroupVOs.length; j++) {
			alert(arr[i].smsGroupVOs[j]);
			out += "<tr>" + "<td><strong>" + arr[i].name
			"</strong></td>" + "<td><strong>" + arr[i].smsGroupVOs[j].name
					+ "</strong></td>" + "<td><strong>"
					+ arr[i].smsGroupVOs[j].cpContentMatchValue
					+ "</strong></td>" + "</tr>";

		}
	}
	out += "</tbody></table>"
	$("#SecondTemplateTable").append(out);

};
