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
						alert(pass);
						$.get("/SmsUi/loginServlet", {
							username : name,
							password : pass
						}, function(responseText) {
							if (responseText != 403) {
								window.open("MainPage.html" + "?JSESSIONID="
										+ (responseText), "_self");
							} else {
								$("#usernameInner").text(
										"something went  wrong  try again ");

								/* $("#sessionIdHolder").val(responseText); */
							}
						});

						/* window.open("MainPage.html"+"?JSESSIONID="+($("#sessionIdHolder").val()),"_self"); */
					});
		});