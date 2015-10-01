$(document)
		.ready(
				function() {
					var xmlhttp = new XMLHttpRequest();
					var url = "http://localhost:8082/TestSmsServerProject/myFirstServlet";

					xmlhttp.onreadystatechange = function() {
						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
							myFunction1(xmlhttp.responseText);
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

				});