/*function addRow() {

	var out = "<table id=\"SecTemplateTable\" data-height=\" 300\"   data-search-time-out=\"1\""
			+ "data-click-to-select=\"true\""
			+ "data-striped=\" true\""
			+ "data-toggle=\"table\" data-search=\"true\">"
			+ "<thead><tr>"
			+ "<th data-sortable=\"true\">"
			+ ".</th><th data-sortable=\"true\">..</th><th data-sortable=\"true\">...</th><th>....</th></tr></thead>"
			+ "<tbody>";

	
 * <div class=\"boxed col-md-3\"> <tr> <td> <div class="card-view"><span
 * class="title" style="">Groups</span><span class="value">group2</span></div>
 * <div class="card-view"><span class="title" style="">Groups</span><span
 * class="value">group2</span></div> <div class="card-view"><span
 * class="title" style="">Groups</span><span class="value">group2</span></div>
 * </td>
	 
	for (var i = 0; i < types.length; i++)
		for (var j = 0; j < types[i].tid.length; j++)
			// for (var k = 0; k < types[i].tid[j].gid.length; k++)

			out += "<tr id=\""
					+ types[i].typename
					+ "\" "
					+ "data-sortable=\"true\""
					+ ">"
					+ "<td> "
					+ " "
					+ "<span class=\"value\">"
					+ types[i].typename
					+ "</span>"
					+ "</td><td "
					+ "title=\"definition of what this  icon is and  other details\">"
					+ " <br>"
					+ "<hr style=\"height: 2px; color: #333; background-color: #b2b2b2; margin-bottom: 5px\">"

					+ types[i].tid[j].groupname
					+ "</td><td> "

					+ j
					+ i
					+ "</td><td>  <input id=\"check00\" data-index=\"0\" onclick=\"myFunction2(0,0)\""
					+ "name=\"checkbox\" type=\"checkbox\"></td></tr>";

	out += "</tbody></table>"
	$("#SecondTemplateTable").append(out);

	// hideall();
};*/
function addRow() {
	var out = "<table id=\"SecTemplateTable\"" + "<thead><tr>" + "<th  >"
			+ ".</th><th  >..</th><th  >...</th><th>....</th></tr></thead>"
			+ "<tbody>";
	for (var i = 0; i < types.length; i++)
		for (var j = 0; j < types[i].tid.length; j++)
			// for (var k = 0; k < types[i].tid[j].gid.length; k++)

			out += "<tr>"
					+ "<td> "
					
				
					+ types[i].typename
				
					+ "</td><td> "
				
					+ types[i].tid[j].groupname
					+ "</td><td> "

					+ j
					+ i
					+ "</td><td>  <input id=\"check00\"  onclick=\"myFunction2(0,0)\""
					+ "name=\"checkbox\" type=\"checkbox\"></td></tr>";

	out += "</tbody></table>"
	$("#SecondTemplateTable").append(out);

};

function hideall() {
	for (var i = 0; i < types.length; i++) {
		$(types[i].typename).toggleClass("hidedata");
	}
};
var SecondTableSelected = [];

function myFunction2(typeno, groupno) {

	var typGrp = String(typeno) + String(groupno);

	for (var m = 0; m < FirstTableSelected.length; m++)
		for (var n = 0; n < SecondTableSelected.length; n++) {
			if (typGrp == SecondTableSelected[n]) {
				// disp();
				SecondTableSelected.splice(n, 1);
				SecondTableSelected.sort();
				displayAllTemplates();
				return;
			}
		}
	SecondTableSelected.push(typGrp);
	// disp();
	SecondTableSelected.sort();
	displayAllTemplates();

	function disp() {
		for (var n = 0; n < SecondTableSelected.length; n++)
			alert(n + "," + SecondTableSelected[n])

	}
};

