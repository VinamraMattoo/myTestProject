$(document)
		.ready(
				function() {
					var xmlhttp = new XMLHttpRequest();
					var url = "temp.txt";

					xmlhttp.onreadystatechange = function() {
						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
							myFunction1(xmlhttp.responseText);

						}
					}
					xmlhttp.open("GET", url, true);
					xmlhttp.send();

					function myFunction1(response) {

						var arr = JSON.parse(response);
						/* template data */
						var t1g1temp1 = [ {
							retryCount : 10,
							messageExpiryTime : 15
						} ];
						var t1g1temp2 = [ {
							retryCount : 11,
							messageExpiryTime : 25
						} ];

						var t1g2temp1 = [ {
							retryCount : 18,
							messageExpiryTime : 35
						} ];
						var t1g2temp2 = [ {
							retryCount : 16,
							messageExpiryTime : 65
						} ];

						var t2g1temp1 = [ {
							retryCount : 10,
							messageExpiryTime : 15
						} ];
						var t2g1temp2 = [ {
							retryCount : 11,
							messageExpiryTime : 25
						} ];

						var t2g2temp1 = [ {
							retryCount : 18,
							messageExpiryTime : 35
						} ];
						var t2g2temp2 = [ {
							retryCount : 16,
							messageExpiryTime : 65
						} ];

						/* group data */
						var t1g1 = [ {
							templateName : t1g1temp1
						}, {
							templateName : t1g1temp2
						} ];
						var t1g2 = [ {
							templateName : t1g2temp1
						}, {
							templateName : t1g2temp2
						} ];
						
						var t2g2 = [ {
							templateName : t2g2temp1
						}, {
							templateName : t2g2temp2
						} ];

						var t2g1 = [ {
							templateName : t2g1temp1
						}, {
							templateName : t2g1temp2
						} ];
						/* type data */
						var type1 = [ {
							groupname : "group1",
							gid : t1g1
						}, {
							groupname : "group2",
							gid : t1g2
						} ];

						var type2 = [ {
							groupname : t2g1
						}, {
							groupname : t2g2
						} ];
						/* types array */
						var types = [ {
							typename : "type1",
							tid : type1
						}, {
							typename : "type2",
							tid : type2
						} ];

						/*
						 * $.each(arr1, function(index, type) {
						 * $.each(type.type1); })
						 */

						/*
						 * if (arr1.length != 0) { alert(arr1[0].types);
						 * 
						 * $.each(arr,function(i,clstr){ $() }) }
						 */

						var out = null;
						alert(types[0].tid[0].gid[0].templateName[0].messageExpiryTime);

						for (i = 0; i < types.length; i++) {
							out += "<tr>"
									+ "<td>"
									+ "Type"
									+ i
									+ "</td><td>"
									+ types[0].tid[0].gid[0].templateName[0].messageExpiryTime
									+ "</td><td></td></tr>";
						}
						out += "</table>";

						$("#unewtab > tbody").append(out);

					}

				});
