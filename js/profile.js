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
	'minimum breakdown': {
		'under 17': 0.99,
		'18 to 24': 0,
		'25-64': 28.99,
		'65 and over': 3.66,	
	},
	'maximum breakdown': {
		'under 17': 43.68,
		'18 to 24': 45.67,
		'25-64': 80.25,
		'65 and over': 63.38,			
	}
}


// Params:
// - minValue as float
// - maxValue as float
// - thisValue
// - hashmap of other values, names and values 

function BarViz(thisValue, otherValues) {
	this.width = 400;
	this.height = 30;
	this.minValue = 0;
	this.maxValue = 100;
	this.thisValue = thisValue;
	this.otherValues = otherValues;
}

// set up BarViz class
BarViz.prototype.draw = function(r, x, y) {
	// draw base rectangle
	r.rect(x, y, this.width, this.height);

	// draw bar
	var thisValueWidth = (this.thisValue/this.maxValue) * this.width;
	r.rect(x, y, thisValueWidth, this.height).attr({fill: "#bfa22f"});
	
	var otherLabelsY = y + this.height + 10;
	// draw lines for other values
	console.log(this.otherValues);
	for (var key in this.otherValues){
		var value = this.otherValues[key];
		var valueX = x+ (value/this.maxValue)*this.width;
		// http://raphaeljs.com/reference.html#Paper.path
		r.path("M"+valueX+","+y+"V"+(y+this.height));
		r.text(valueX, otherLabelsY, key + ": " + value + "%");
	}

};


window.onload = function() {
	var r = Raphael("age");

	var values = [age_data['breakdown']['under 17'],
	 			  age_data['breakdown']['18 to 24'],
	 			  age_data['breakdown']['25-64'],
	 			  age_data['breakdown']['65 and over'],
				 ];

	var legend_setup = {
		legend: ["Under 17: %%.%%", "18-24: %%.%%", "25-64: %%.%%", "65+: %%.%%"],
		legendpos: "east",
	}

	var xPosition = 70;
	var yPosition = 60;
	var radius = 55;
	pie = r.piechart(xPosition, yPosition, radius, values, legend_setup)

	// bind on hover behavior to the pie
	pie.hover(function () {
        this.sector.stop();
        // increase the size of the sector being hovered over
        var scaleFactor = 1.04;
        this.sector.scale(scaleFactor, scaleFactor, this.cx, this.cy);

        if (this.label) {
            this.label[0].stop();
            // increase radius of circle adjacent to the label
            this.label[0].attr({ r: 6 });
            // make the label bold
            this.label[1].attr({ "font-weight": 800 });
        }
    }, function () {
        this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

        if (this.label) {
        	// make the label bounce when it shrinks again
        	var animationTime = 500;
            this.label[0].animate({ r: 5 }, animationTime, "bounce");
            // font weight back to normal
            this.label[1].attr({ "font-weight": 400 });
        }
    });

	
	var thisValue = age_data['breakdown']['under 17'];
	var otherValues = {
		'Average': age_data['average breakdown']['under 17'],
		'Minimum': age_data['minimum breakdown']['under 17'],
		'Maximum': age_data['maximum breakdown']['under 17'],
	}
	barViz = new BarViz(thisValue, otherValues);
	barViz.draw(r, 100, 200);

}

