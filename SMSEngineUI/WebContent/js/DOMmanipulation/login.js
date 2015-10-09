$(document).ready(function() {
	$("#username").blur(function() {
		var name = $("#username").val();
		$.get('loginServlet', {
			username : name
		}, function(responseText) {
			$('#usernameInner').text(responseText);
		});
	});

	/* window.open("MainPage.html","_self"); */
});