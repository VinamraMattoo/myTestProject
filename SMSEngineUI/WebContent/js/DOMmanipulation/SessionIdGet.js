$(document).ready(function() {
	var SessionID = GetURLParameter("JSESSIONID");
	alert(SessionID);
	if (!SessionID)
		window.open("../Index.html", "_self");
	else
		$("#sessionId").text(SessionID);
});

function GetURLParameter(sParam) {

	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');

	for (var i = 0; i < sURLVariables.length; i++)

	{

		var sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] == sParam)

		{

			return sParameterName[1];

		}

	}

};