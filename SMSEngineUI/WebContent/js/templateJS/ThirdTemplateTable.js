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
			+ "<th>Options</th></tr></thead>" + "<tbody>";

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].smsGroupVOs.length; j++) {
			for (var k = 0; k < arr[i].smsGroupVOs[j].smsTemplateVOs.length; k++) {

				out += "<tr>"
						+ "<td"
						+" title=\"" +arr[i].description +"\"" 
						+">"
						+"<strong>"
						+ arr[i].name
						+ "</strong></td>"
						+ "<td><strong>"
						+ arr[i].smsGroupVOs[j].name
						+ "</strong></td>"
						+ "<td><strong>"
						+ arr[i].smsGroupVOs[j].smsTemplateVOs[k].name
						+ "</strong></td>"
						+ "<td><strong>"
						+ arr[i].smsGroupVOs[j].smsTemplateVOs[k].retryCount
						+ "</strong></td>"
						+ "<td><button class=\"btn btn-primary btn-sm\" onclick=\"EditTemplateProp("
						+ arr[i].id + "," + arr[i].smsGroupVOs[j].id + ","
						+ arr[i].smsGroupVOs[j].smsTemplateVOs[k].id
						+ ")\">Edit</td></tr>";
			}
		}
	}
	out += "</tbody></table>";
	$("#TemplateThirdTable1").append(out);
};
function EditTemplateProp(tid, gid, templId) {
	var arr = JsonArray;
	var out;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].smsGroupVOs.length; j++) {
			for (var k = 0; k < arr[i].smsGroupVOs[j].smsTemplateVOs.length; k++) {
				if (tid == arr[i].id
						&& gid == arr[i].smsGroupVOs[j].id
						&& templId == arr[i].smsGroupVOs[j].smsTemplateVOs[k].id) {

					out += "<div class=\"tempfield\">"
							+ "<input type=\"hidden\"class=\"form-control\" name=\"id\" value="
							+ templId
							+ ">"
							+ "<input type=\"hidden\" name=\"patient_lead_sms\" value="
							+ arr[i].smsGroupVOs[j].smsTemplateVOs[k].name
							+ "> <br />"
							+ "<input type=\"text\" class=\"form-control\" name=\"retryCount\" value="
							+ arr[i].smsGroupVOs[j].smsTemplateVOs[k].retryCount
							+ "> <br />"
							+ "<input type=\"text\" class=\"form-control\"	name=\"messageExpiry\" value="
							+ arr[i].smsGroupVOs[j].smsTemplateVOs[k].retryCount
							+ ">" + "</div>";

				}
			}
		}
	}
	$('#templateEditPop').empty().append(out);
	$('#editTemplateProperty').modal('show');
};