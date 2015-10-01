
function addRow() {
	var out = "<table id=\"SecTemplateTable\"" + "<thead><tr>" + "<th  >"
			+ ".</th><th  >..</th><th  >...</th></tr></thead>"
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
					+ "</td></tr>";

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

