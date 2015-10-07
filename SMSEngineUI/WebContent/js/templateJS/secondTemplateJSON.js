$('#updateGroup').submit(function(){
		var data = $(".grpfield").map(function(){
		return{
			
			id:$(this).find('[name="id"]').val(),
			
			cpTypeMatchType: $(this).find('[name="cpTypeMatchType"]').val(),
			cpTypeMatchValue: $(this).find('[name="cpTypeMatchValue"]').val(),
			is_bulk: $(this).find('[name="is_bulk"]').val(),
			priority: $(this).find('[name="priority"]').val(),
		};
	}).get();
	alert(JSON.stringify(data));
});