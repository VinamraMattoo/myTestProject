function logoutFunction() {
	/*
	 * an ajax call to delete the session id and redirect to login page
	 */

	var sure = (confirm("do u really want to log out"));
	if (sure) {
		var xmlhttp = new XMLHttpRequest();
		var url = "/SmsUi/loginServlet";
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				callme(xmlhttp.responseText);
			}

		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();

	};

};
function callme(responseText) {
	alert("session killed");
	window.open("../Index.html", "_self");

};