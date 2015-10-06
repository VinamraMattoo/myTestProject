function populateSecondTemplateTable(response) {

	var arr = JSON.parse(response);
	var out;

	out += " <table  data-height=\" 300\" data-search-time-out=\"1\""
			+ "data-striped=\" true\""
			+ "data-toggle=\"table\" data-search=\"true\" >" + "<thead>"
			+ "<tr>" + "<th data-sortable=\"true\">Type</th>"
			+ "<th data-sortable=\"true\">Group</th>"
			+ "<th data-sortable=\"true\">Values</th>"
			+ "<th> Options</th></tr></thead>" + "<tbody>";

	for (var i = 0; i < arr.length; i++) {

		for (var j = 0; j < arr[i].smsGroupVOs.length; j++) {

			out += "<tr>"
					+ "<td><strong>"
					+ arr[i].name
					+ "</strong></td>"
					+ "<td><strong>"
					+ arr[i].smsGroupVOs[j].name
					+ "</strong></td>"
					+ "<td><strong>"
					+ arr[i].smsGroupVOs[j].cpContentMatchValue
					+ "</strong></td>"
					+ "<td><button class=\"btn btn-primary btn-sm\" onclick=\"EditGroupProp("
					+ arr[i].id + "," + arr[i].smsGroupVOs[j].id
					+ ")\">Edit</td></tr>";

		}
	}
	out += "</tbody></table>";
	$('#SecondTemplateTable').append(out);

};
function EditGroupProp(tid, gid) {
	alert("comin here");
	var arr = JsonArray;
	var out;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].smsGroupVOs.length; j++) {
			if (arr[i].id == tid && arr[i].smsGroupVOs[j].id == gid) {

				out += "<div class=\"grpfield\">"
						+ "<input type=\"hidden\" name=\"id\" value=\"1\">"
						+ "<select "
						+ "class=\"form-control text-center\" name=\"cpTypeMatchType\">";

				if (arr[i].smsGroupVOs[j].cpContentMatchType == "ABSOLUTE_PERIOD") {
					out += "<option value=\"CALENDAR_DAY\">Calender Day</option>"
							+ "<option value=\"ABSOLUTE_PERIOD\" selected>ABSOLUTE PERIOD</option>";
				} else {
					out += "<option value=\"CALENDAR_DAY\" selected>Calender Day</option>"
							+ "<option value=\"ABSOLUTE_PERIOD\" >ABSOLUTE PERIOD</option>";
				}

				out += "</select>"
						+ "<input type=\"hidden\" name=\"cpContentMatchValue\" value=\"1\"> <br />"
						+ "<input type=\"text\" value=\""
						+ arr[i].smsGroupVOs[j].cpContentMatchValue
						+ "\">"
						+ "<input type=\"hidden\" name=\"cpTypeMatchType\" value=\"1\"> <br />"
						+ "<select "
						+ "class=\"form-control text-center\" name=\"is_bulk\">"
						+ "<option value=\"true\">bulk</option>"
						+ "<option value=\"false\" selected>singular</option>"
						+ "</select>"
						+ "<input type=\"hidden\" name=\"cpTypeMatchValue\" value=\"1\"> <br />"
						+ "<input type=\"text\"	name=\"priority\" value=\""
						+ arr[i].smsGroupVOs[j].cpTypeMatchValue + "\">"
						+ "</div>";

			}
		}
	}
	$('#groupEditPop').append(out);

	$('#editGroupProperty').modal('show');

};
