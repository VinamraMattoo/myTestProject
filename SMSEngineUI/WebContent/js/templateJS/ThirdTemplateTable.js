function populateThirdTemplateTable(response) {

	var arr = JSON.parse(response);
	var out;

	out += " <table  data-height=\" 300\" data-search-time-out=\"1\""
			+ "data-striped=\" true\""
			+ "data-toggle=\"table\" data-search=\"true\" >"
			+ "<caption style=\"border: inherit; background-color: lightgrey;\">"
			+ "<span class=\"align-left\"><strong>Types</strong></span>"
			+ "</caption>" + "<thead>" + "<tr>"
			+ "<th data-sortable=\"true\">Type</th>"
			+ "<th data-sortable=\"true\">Group</th>"
			+ "<th data-sortable=\"true\">Template</th>"
			+ "<th data-sortable=\"true\">Values</th>"
			+ "<th data-field=\"operate\" data-formatter=\"operateFormatter\""
			+ "data-events=\"operateEvents\">Options</th></tr></thead>"
			+ "<tbody>";

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].smsGroupVOs.length; j++) {
			for (var k = 0; k < arr[i].smsGroupVOs[j].smsTemplateVOs.length; k++) {

				out += "<tr>" + "<td><strong>" + arr[i].name + "</strong></td>"
						+ "<td><strong>" + arr[i].smsGroupVOs[j].name
						+ "</strong></td>" + "<td><strong>"
						+ arr[i].smsGroupVOs[j].smsTemplateVOs[k].name
						+ "</strong></td>" + "<td><strong>"
						+ arr[i].smsGroupVOs[j].smsTemplateVOs[k].retryCount
						+ "</strong></td>" + "</tr>";
			}
		}
	}
	out += "</tbody></table>"
	$("#TemplateThirdTable1").append(out);
};
