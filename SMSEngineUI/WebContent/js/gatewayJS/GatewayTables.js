$(document)
		.ready(
				function() {
					var xmlhttp = new XMLHttpRequest();
					var url = "../JSON/GatewayConfigJSON.txt";

					xmlhttp.onreadystatechange = function() {
						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
							myFunction1(xmlhttp.responseText);
							myFunction2(xmlhttp.responseText);
							myFunction3(xmlhttp.responseText);
						}
					};
					xmlhttp.open("GET", url, true);
					xmlhttp.send();

					function myFunction1(response) {
						var arr = JSON.parse(response);
						 
						var out = "<table class=\"table table-striped\" data-row-style=\"rowStyle\">";
						out += "<thead><tr><td>" + "Name" + "</td><td>"
								+ "Value" + "</td></tr></thead>";

						out += "<tr><td>" + "URL end point for submission"
								+ "</td><td>" + arr[0].URLendpointforsubmission
								+ "</td></tr><tr><td>"
								+ "Restricted Characters" + "</td><td>"
								+ arr[0].Restrictedcharacters
								+ "</td></tr><tr><td>"
								+ "Inactivity period start" + "</td><td>"
								+ arr[0].Inactivityperiodstart + "</td></tr>"
								+ "<tr><td>" + "Inactivity period end"
								+ "</td><td>" + arr[0].Inactivityperiodend
								+ "</td></tr>" + "<tr><td>"
								+ "URL end-point for polling" + "</td><td>"
								+ arr[0].URLendpointforpolling + "</td></tr>";

						out += "</table>";

						$('#gatewayPanel1').append(out);
					}

					function myFunction2(response) {
						var arr = JSON.parse(response);
						 
						var out = "<table class=\"table table-striped\" data-row-style=\"rowStyle\">";
						out += "<thead><tr><td>" + "Name" + "</td><td>"
								+ "Value" + "</td></tr></thead>";

						out += "<tr><td>" + "URL end point for submission"
								+ "</td><td>" + arr[1].URLendpointforsubmission
								+ "</td></tr><tr><td>"
								+ "Restricted Characters" + "</td><td>"
								+ arr[1].Restrictedcharacters
								+ "</td></tr><tr><td>"
								+ "Inactivity period start" + "</td><td>"
								+ arr[1].Inactivityperiodstart + "</td></tr>"
								+ "<tr><td>" + "Inactivity period end"
								+ "</td><td>" + arr[1].Inactivityperiodend
								+ "</td></tr>" + "<tr><td>"
								+ "URL end-point for polling" + "</td><td>"
								+ arr[1].URLendpointforpolling + "</td></tr>";

						out += "</table>";

						$('#gatewayPanel2').append(out);
					}

					function myFunction3(response) {
						var arr = JSON.parse(response);
						 
						var out = "<table class=\"table table-striped\" data-row-style=\"rowStyle\">";
						out += "<thead><tr><td>" + "Name" + "</td><td>"
								+ "Value" + "</td></tr></thead>";

						out += "<tr><td>" + "URL end point for submission"
								+ "</td><td>" + arr[2].URLendpointforsubmission
								+ "</td></tr><tr><td>"
								+ "Restricted Characters" + "</td><td>"
								+ arr[2].Restrictedcharacters
								+ "</td></tr><tr><td>"
								+ "Inactivity period start" + "</td><td>"
								+ arr[2].Inactivityperiodstart + "</td></tr>"
								+ "<tr><td>" + "Inactivity period end"
								+ "</td><td>" + arr[2].Inactivityperiodend
								+ "</td></tr>" + "<tr><td>"
								+ "URL end-point for polling" + "</td><td>"
								+ arr[2].URLendpointforpolling + "</td></tr>";

						out += "</table>";

						$('#gatewayPanel3').append(out);
					}

				});
