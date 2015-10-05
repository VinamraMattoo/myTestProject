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
						var out = "<div class=\"form-group\">";
						for (i = 0; i < arr.length; i++) {
							out += "<label for=\"name\">" + arr[i].name
									+ "</label><br><br>"
									+ "<input class=\"form-control\" "
									+ "value=" + "\"" + arr[i].value + "\""
									+ "type=" + arr[i].dataType
									+ "step=\"any\"" + "id=\"name\" /><br><br>";

						}
						out += "</div><br>";
						$('#update-grp-1').append(out);
					}

				});