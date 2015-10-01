function displayAllTemplates() {

	var out;
	if (SecondTableSelected.length != null)

/*		out += "<tr><th></th>"
				+ "<th data-field=\"operate\" data-formatter=\"operateFormatter\""
				+ "data-events=\"operateEvents\">Options</th></tr></thead>"
				+ "<tbody class=\"width: auto\">";*/
	for (var j = 0; j < SecondTableSelected.length; j++) {
		for (var k = 0; k < types[SecondTableSelected[j].substring(0, 1)].tid[SecondTableSelected[j]
				.substring(1)].gid.length; k++)
			for (var l = 0; l < types[SecondTableSelected[j].substring(0, 1)].tid[SecondTableSelected[j]
					.substring(1)].gid[k].tempId.length; l++) {

				out += "<tr><td>"
						+ "<div class=\"boxed col-md-2\">"
						+ types[SecondTableSelected[j].substring(0, 1)].typename
						+ "</div> &nbsp;&nbsp;"
						+ "	<div class=\"boxed col-md-2\">"
						+ types[SecondTableSelected[j].substring(0, 1)].tid[SecondTableSelected[j]
								.substring(1)].groupname
						+ "</div> &nbsp;&nbsp;"
						+ "<div class=\"col-md-1\" title=\"Retry Count\">	<span class=\"glyphicon glyphicon-time\"></span>"
						+ types[SecondTableSelected[j].substring(0, 1)].tid[SecondTableSelected[j]
								.substring(1)].gid[k].tempId[l].retryCount
						+ "</div>"
						+ "<div class=\"col-md-1\" title=\"Message Expiry Time\">"
						+ "<span class=\"glyphicon glyphicon-time\"></span>"
						+ types[SecondTableSelected[j].substring(0, 1)].tid[SecondTableSelected[j]
								.substring(1)].gid[k].tempId[l].messageExpiryTime
						+ "</div>"
						+ "<hr style=\"height: 2px; color: #333; background-color: #b2b2b2; margin-bottom: 5px\">"
						+ "<div class=\"col-md-3\" style=\"font-size: 150%\""
						+ "title=\"data tip for this  group will be shown here\">"
						+ types[SecondTableSelected[j].substring(0, 1)].tid[SecondTableSelected[j]
								.substring(1)].gid[k].templateName
						+ "</div>"
						+ "<div>here goes the message and all other template details and stuff..............</div>"
						+ "</td></tr>";

			}
	}

	
		$("#TemplateThirdTable").empty().append(out);
}
