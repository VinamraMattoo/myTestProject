$(document).ready(
		function() {
			/*
			 * $('#username').blur(function() { var name = $('#username').val();
			 * $.get("/SmsUi/loginServlet", { username : name },
			 * function(responseText) {
			 * 
			 * $('#usernameInner').text(responseText).css("font-color","red"); } );
			 * });
			 */
			$('#loginButton').click(
					function() {
						var name = $('#username').val();
						var pass = $('#psswd').val();
						$.get("/SmsUi/loginServlet", {
							psswd : pass,
							username : name
							
						}, function(responseText) {
							if (responseText != 403) {
								window.open("/SmsUi/HTML/MainPage.html" + "?JSESSIONID="
										+ (responseText), "_self");
							} else {
								$("#usernameInner").text(
										"Invalid username or password ");
							}
						});

						/* window.open("MainPage.html"+"?JSESSIONID="+($("#sessionIdHolder").val()),"_self"); */
					});
		});