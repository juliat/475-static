var age_data = {
	'breakdown': {
		'under 17': 14.96,
		'18 to 24': 4.46,
		'25-64': 50.95,
		'65 and over': 29.63,
	},
	'2000 breakdown': {
		'under 17': 19.7,
		'18 to 24': 4.46,
		'25-64': 48.97,
		'65 and over': 26.86,
	},
	'average breakdown': {
		'under 17': 23.5,
		'18 to 24': 7.5,
		'25-64': 52.2,
		'65 and over': 16.7,		
	},
}

window.onload = function() {
	var r = Raphael("age");

	var values = [age_data['breakdown']['under 17'],
	 			  age_data['breakdown']['18 to 24'],
	 			  age_data['breakdown']['25-64'],
	 			  age_data['breakdown']['65 and over'],
				 ];

	var legend_setup = {
		legend: ["Under 17: %%.%%", "18-24: %%.%%", "25-64: %%.%%", "65+: %%.%%"],
		legendpos: "west",
	}

	pie = r.piechart(320, 240, 150, values, legend_setup)

	pie.hover(function () {
        this.sector.stop();
        this.sector.scale(1.1, 1.1, this.cx, this.cy);

        if (this.label) {
            this.label[0].stop();
            this.label[0].attr({ r: 6 });
            this.label[1].attr({ "font-weight": 800 });
        }
    }, function () {
        this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

        if (this.label) {
            this.label[0].animate({ r: 5 }, 500, "bounce");
            this.label[1].attr({ "font-weight": 400 });
        }
    });

/*
	// Creates circle at x = 50, y = 40, with radius 10
	var circle = r.circle(50, 40, 10);
	// Sets the fill attribute of the circle to red (#f00)
	circle.attr("fill", "#f00");

	// Sets the stroke attribute of the circle to white
	circle.attr("stroke", "#fff");
*/
}
