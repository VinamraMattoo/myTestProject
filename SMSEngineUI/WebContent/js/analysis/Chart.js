google.load('visualization', '1', {
	packages : [ 'piechart' ]
});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Task');
	data.addColumn('number', 'Hours per Day');
	data.addRows(3);
	data.setValue(0, 0, 'Sent');
	data.setValue(0, 1, 5);
	data.setValue(1, 0, 'Rejected');
	data.setValue(1, 1, 3);
	data.setValue(2, 0, 'Not sent');
	data.setValue(2, 1, 2);

	var options = {
		title : 'Trends data',
		'width' : 450,
		'height' : 350
	};
	// Create and draw the visualization.
	var chart=new google.visualization.PieChart(document.getElementById('chart_div'));
			chart.draw(data, options);
}
