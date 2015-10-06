$("#updateTemplate").submit(function(){
	var data = $(".tempfield").map(function(){
		return{
			id:$(this).find('[name="id"]').val(),
			name: $(this).find('[name="name"]').text(),
			retryCount: $(this).find('[name="retryCount"]').val(),
			messageExpiry: $(this).find('[name="messageExpiry"]').val(),
		};
	}).get();
	alert(JSON.stringify(data));
});