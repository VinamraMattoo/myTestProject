$(document).ready(
		function() {
			var xmlhttp = new XMLHttpRequest();
			var url = "../JSON/SystemConfigJSON.txt";

			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					myFunction1(xmlhttp.responseText);
					myFunction2(xmlhttp.responseText);
					myFunction3(xmlhttp.responseText);
					myFunction4(xmlhttp.responseText);

				}
			}
			xmlhttp.open("GET", url, true);
			xmlhttp.send();

			function myFunction1(response) {
				var arr = JSON.parse(response);

				var out = "<div class=\"form-group\">";
				out += "<label for=\"name\">" + "\"New SMS load Window :\""
						+ "</label>" + "<input class=\"form-control\" "
						+ "value=" + "\"" + arr[0].NewSMSLoadWindow + "\"" +
						"type=\"time\" step=\"any\""
						+ "id=\"name\" /></div>";

				out += "<div class=\"form-group\">";
				out += "<label for=\"name\">"
						+ "\"Next SMS batch load window :\"" + "</label>"
						+ "<input class=\"form-control\"" + "value=" + "\""
						+ arr[0].NextSMSbatchloadwindow + "\""
						+ " id=\"name\" /></div>";

				out += "<div class=\"form-group\">";
				out += "<label for=\"name\">"
						+ "\"Correlation Id wait time :\"" + "</label>"
						+ "<input class=\"form-control\"" + "value="
						+ arr[0].NextSMSbatchloadwindow
						+ " id=\"name\" /></div>";

				$('#update-grp-1').append(out);

			}

			function myFunction2(response) {
				var arr = JSON.parse(response);

				var out = "<div class=\"form-group\">";
				out += "<label for=\"name\">"
						+ "\"Gateway failure count threshold :\"" + "</label>"
						+ "<input class=\"form-control\" " + "value=" + "\""
						+ arr[0].Gatewayfailurecountthreshold + "\""
						+ "id=\"name\" /></div>";

				out += "<div class=\"form-group\">";
				out += "<label for=\"name\">" + "\"MaxSMSlength :\""
						+ "</label>" + "<input class=\"form-control\""
						+ "value=" + "\"" + arr[0].MaxSMSlength + "\""
						+ " id=\"name\" /></div>";

				out += "<div class=\"form-group\">";
				out += "<label for=\"name\">" + "\"RetrysameGateway :\""
						+ "</label>" + "<input class=\"form-control\""
						+ "value=" + arr[0].RetrysameGateway
						+ " id=\"name\" /></div>";

				$('#update-grp-2').append(out);

			}
			function myFunction3(response) {
				var arr = JSON.parse(response);

				var out = "<div class=\"form-group\">";
				out += "<label for=\"name\">" + "\"SMS status wait time :\""
						+ "</label>" + "<input class=\"form-control\" "
						+ "value=" + "\"" + arr[0].SMSstatuswaittime + "\""
						+ "id=\"name\" /></div>";

				out += "<div class=\"form-group\">";
				out += "<label for=\"name\">"
						+ "\"New SMS loading interval :\"" + "</label>"
						+ "<input class=\"form-control\"" + "value=" + "\""
						+ arr[0].NewSMSloadinginterval + "\""
						+ " id=\"name\" /></div>";

				out += "<div class=\"form-group\">";
				out += "<label for=\"name\">"
						+ "\"Next SMS loading interval :\"" + "</label>"
						+ "<input class=\"form-control\"" + "value="
						+ arr[0].NextSMSloadinginterval
						+ " id=\"name\" /></div>";

				$('#update-grp-3').append(out);

			}
			function myFunction4(response) {
				var arr = JSON.parse(response);

				var out = "<div class=\"form-group\">";
				out += "<label for=\"name\">"
						+ "\"Next SMS Batch loading interval :\"" + "</label>"
						+ "<input class=\"form-control\" " + "value=" + "\""
						+ arr[0].NextSMSBatchloadinginterval + "\""
						+ "id=\"name\" /></div>";

				out += "<div class=\"form-group\">";
				out += "<label for=\"name\">" + "\"Status poll retry limit :\""
						+ "</label>" + "<input class=\"form-control\""
						+ "value=" + "\"" + arr[0].Statuspollretrylimit + "\""
						+ " id=\"name\" /></div>";

				out += "<div class=\"form-group\">";
				out += "<label for=\"name\">"
						+ "\"Gateway status checker task interval :\""
						+ "</label>" + "<input class=\"form-control\""
						+ "value=" + arr[0].Gatewaystatuscheckertaskinterval
						+ " id=\"name\" /></div>";

				$('#update-grp-4').append(out);

			}
		});
