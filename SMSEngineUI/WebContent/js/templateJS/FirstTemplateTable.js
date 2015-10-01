var t1g1temp1 = [ {
	retryCount : 10,
	messageExpiryTime : 15
} ];
var t1g1temp2 = [ {
	retryCount : 11,
	messageExpiryTime : 25
} ];

var t1g2temp1 = [ {
	retryCount : 33,
	messageExpiryTime : 44
} ];
var t1g2temp2 = [ {
	retryCount : 16,
	messageExpiryTime : 65
} ];


var t1g2 = [ {
	templateName : "Template121",
	tempId : t1g2temp1
}, {
	templateName : "Template122",
	tempId : t1g2temp2
} ];

var Marketing = [ {
	groupname : "Group11",
	gid : [ {
		templateName : "Template111",
		tempId : t1g1temp1
	}, {
		templateName : "Template112",
		tempId : t1g1temp2
	} ]
}, {
	groupname : "Group12",
	gid : t1g2
} ];

var t2g1temp1 = [ {
	retryCount : 10,
	messageExpiryTime : 15
} ];
var t2g1temp2 = [ {
	retryCount : 11,
	messageExpiryTime : 25
} ];

var t2g2temp1 = [ {
	retryCount : 18,
	messageExpiryTime : 35
} ];
var t2g2temp2 = [ {
	retryCount : 23,
	messageExpiryTime : 65
} ];

var t2g2 = [ {
	templateName : "Template221",
	tempId : t2g2temp1
}, {
	templateName : "Template222",
	tempId : t2g2temp2
} ];

var t2g1 = [ {
	templateName : "Template211",
	tempId : t2g1temp1
}, {
	templateName : "Template212",
	tempId : t2g1temp2
} ];

var Sales = [ {
	groupname : "Group21",
	gid : t2g1
}, {
	groupname : "Group22",
	gid : t2g2
} ];

var types = [ {
	typename : "Sales",
	tid : Sales
}, {
	typename : "Marketing",
	tid : Marketing
} ];

var FirstTableSelected = [];
function fun1() {
	var out;

	out += " <table id=\"firstTempTable\" data-height=\" 300\" data-search-time-out=\"1\""
			+ "data-striped=\" true\""
			+ "data-toggle=\"table\" data-search=\"true\" >"
			+ "<caption style=\"border: inherit; background-color: lightgrey;\">"
			+ "<span class=\"align-left\"><strong>Types</strong></span>"
			+ "</caption>" + "<thead>" + "<tr>"
			+ "<th data-sortable=\"true\">Types</th>"
			+ "<th data-field=\"operate\" data-formatter=\"operateFormatter\""
			+ "data-events=\"operateEvents\">Options</th></tr></thead>"
			+ "<tbody>";
	for (var i = 0; i < types.length; i++) {
		out += "<tr>" + "<td><strong>"
				+ types[i].typename
				"</strong></td></tr>";
		FirstTableSelected.push(types[i].typename);

	}
	out += "</tbody>" + "</table>";

	$("#TemplateFirstTable").empty().append(out);

};

function myFunction(typeName) {

	if (FirstTableSelected.length != "null") {
		disp(typeName);

	}
};
function disp(typename) {
	$(typename).toggleClass("hidedata");
};

