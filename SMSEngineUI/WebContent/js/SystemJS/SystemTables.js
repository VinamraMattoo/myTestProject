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
						out += "<thead><tr><td><strong>" + "Name" + "</strong></td><td><strong>"
								+ "Value" + "</strong></td></tr></thead>";
						for (i = 0; i < arr.length; i++) {
							out += "<tr><td>" + "New SMS Load Window"
									+ "</td><td>"
									+ arr[i].NewSMSLoadWindow
									+ "</td></tr><tr><td>"
									+ "Next SMS Batch load window"
									+ "</td><td>"
									+ arr[i].NextSMSbatchloadwindow
									+ "</td></tr><tr><td>"
									+ "Correlation Id Wait Time"
									+ "</td><td>"
									+ arr[i].CorrelationIdwaittime
									+ "</td></tr>"
									+ "<tr><td>"
									+ "Gateway failure count threshold"
									+ "</td><td>"
									+ arr[i].Gatewayfailurecountthreshold
									+ "</td></tr><tr><td>"
									+ "Max SMS Length"
									+ "</td><td>"
									+ arr[i].MaxSMSlength
									+ "</td></tr><tr><td>"
									+ "Retry same Gateway"
									+ "</td><td>"
									+ arr[i].RetrysameGateway
									+ "</td></tr>"
									+ "<tr><td>"
									+ "SMS Status wait time"
									+ "</td><td>"
									+ arr[i].SMSstatuswaittime
									+ "</td></tr><tr><td>"
									+ "New SMS Batch loading interval"
									+ "</td><td>"
									+ arr[i].NewSMSloadinginterval
									+ "</td></tr><tr><td>"
									+ "Next SMS loading interval"
									+ "</td><td>"
									+ arr[i].NextSMSloadinginterval
									+ "</td></tr>"
									+ "<tr><td>"
									+ "Status Poll Retry Limit"
									+ "</td><td>"
									+ arr[i].Statuspollretrylimit
									+ "</td></tr><tr><td>"
									+ "Gateway Status Checker task Interval"
									+ "</td><td>"
									+ arr[i].Gatewaystatuscheckertaskinterval
									+ "</td></tr>";
						}
						out += "</table>";

						$('#systemPanel').append(out)
					}

				});