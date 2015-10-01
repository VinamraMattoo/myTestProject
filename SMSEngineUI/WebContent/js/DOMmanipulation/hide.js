$(document).ready(function() {
	$("#update-grp-1").hide();
	$("#update-grp-2").hide();
	$("#update-grp-3").hide();
	$("#update-grp-4").hide();
});

$(document).ready(function() {
	$("#click1").click(function() {
		$("#update-grp-1").fadeToggle("slow", "linear");
	});
	$("#click2").click(function() {
		$("#update-grp-2").fadeToggle("slow", "linear");
	});
	$("#click3").click(function() {
		$("#update-grp-3").fadeToggle("slow", "linear");
	});
	$("#click4").click(function() {
		$("#update-grp-4").fadeToggle("slow", "linear");
	});
});
/*
 * $('#templFirstTable'). onCheck( function (row) { alert("ajskhgd"); });
 */
/*
 * $('#templFirstTable').click( function (row) { alert("ajskhgd"); });
 */
/*
 * $(".bs-checkbox").change(function() { alert("coming") if(this.checked) {
 * alert("coming") } }); $(function() { alert("coming")
 * $(".bs-checkbox").change(function() { alert("coming") }) })
 */

