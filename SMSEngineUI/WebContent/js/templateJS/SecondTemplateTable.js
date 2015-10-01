function populateSecondTemplateTable(response) {

	var arr = JSON.parse(response);
	var out;

	out += " <table  data-height=\" 300\" data-search-time-out=\"1\""
			+ "data-striped=\" true\""
			+ "data-toggle=\"table\" data-search=\"true\" >" + "<thead>"
			+ "<tr>" + "<th data-sortable=\"true\">Type</th>"
			+ "<th data-sortable=\"true\">Group</th>"
			+ "<th data-sortable=\"true\">Values</th></tr></thead>" + "<tbody>";

	for (var i = 0; i < arr.length; i++) {

		for (var j = 0; j < arr[i].smsGroupVOs.length; j++) {
			// alert(arr[i].smsGroupVOs[j].cpContentMatchValue);

			out += "<tr>" + "<td><strong>" + arr[i].name + "</strong></td>"
					+ "<td><strong>" + arr[i].smsGroupVOs[j].name
					+ "</strong></td>" + "<td><strong>"
					+ arr[i].smsGroupVOs[j].cpContentMatchValue
					+ "</strong></td>" + "</tr>";

		}
	}
	out += "</tbody></table>"
	$("#SecondTemplateTable").append(out);

};
