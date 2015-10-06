$("#updateType").click(function(){
	var data = $(".typifields").map(function(){
		return{
			id:$(this).find('[name="id"]').val(),
			cpContentMatchType: $(this).find('[name="cpContentMatchType"]').val(),
			cpContentMatchValue: $(this).find('[name="cpContentMatchValue"]').val(),
			cpTypeMatchType: $(this).find('[name="cpTypeMatchType"]').val(),
			cpTypeMatchValue: $(this).find('[name="cpTypeMatchValue"]').val(),
		};
	}).get();
	alert(JSON.stringify(data));
});