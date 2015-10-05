$("#submit_sysinfo").click(function(){
var data = $('.sys_input_fields').map(function() {
    return {
        id: $(this).find('[name="id"]').val(),
        value: $(this).find('[name="value"]').val(),
        state: $(this).find('[name="state"]').val(),
    };
}).get();
alert(JSON.stringify(data));
});