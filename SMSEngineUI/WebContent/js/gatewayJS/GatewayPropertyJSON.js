$('#updateGWProperty').click(function(){
		var data = $(".grpfield").map(function(){
		return{
			
			id:$(this).find('[name="id"]').val(),
			
			key1: $(this).find('[name="key1"]').val(),
			key2: $(this).find('[name="key2"]').val(),
			key3: $(this).find('[name="key3"]').val(),
			
		};
	}).get();
	alert(JSON.stringify(data));
});