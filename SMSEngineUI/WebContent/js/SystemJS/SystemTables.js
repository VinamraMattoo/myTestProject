$(document)
		.ready(
				function() {
					var xmlhttp = new XMLHttpRequest();
					var url = "../JSON/sys.txt";
					var responseData;
					xmlhttp.onreadystatechange = function() {
						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
							responseData = xmlhttp.responseText;
							myFunction1(xmlhttp.responseText);
							myFunction2(xmlhttp.responseText);
						}
					}
					xmlhttp.open("GET", url, true);
					xmlhttp.send();

					function myFunction1(response) {
						var arr = JSON.parse(response);
						var i;
						var out = "<table class=\"table table-striped\" data-row-style=\"rowStyle\">";
						out += "<thead><tr><td><strong>" + "Name"
								+ "</strong></td><td><strong>" + "Value"
								+ "</strong></td></tr></thead>";
						for (i = 0; i < arr.length; i++) {
							out += "<tr><td>" + arr[i].name + "</td><td>"
									+ arr[i].value + "</td></tr>";
						}
						out += "</table>";

						$('#systemPanel').append(out);
					}
					function myFunction2(response) {
						var arr = JSON.parse(response);
						var i;
						var out = "<form action=\"\" id=\"system_edit_form\">";
						for (i = 0; i < arr.length; i++) {
							out += "<label>" + arr[i].name
									+ "</label><br><br><div class=\"sys_input_fields\">"
									+ "<input name=\"id\""
									+ "value=" + "\"" + i + "\""
									+ "type=\"hidden\"" 
									+ " /><br><br>"
									+ "<input name=\"value\" class=\"form-control\""
									+ "value=" + "\"" + arr[i].value + "\""
									+ "type=" + "\"" + arr[i].datatype  + "\""
									+ " /><br><br>"
							+"<select class=\"form-control text-center\" name=\"state\">"
							+"<option value=\"false\">Inactive</option>"
							+"<option value=\"true\" selected>Active</option>"
							+"</select> </div><br><br>";						
							
							
						}
						out += "</form><br>";
						$('#update-grp-1').append(out);
					}

				});