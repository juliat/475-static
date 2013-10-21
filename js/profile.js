window.onload = function() {
	var r = Raphael("age");

	var age_data = getDataFromHTML("age");

	var values = [age_data['breakdown']['under 17'],
	 			  age_data['breakdown']['18 to 24'],
	 			  age_data['breakdown']['25-64'],
	 			  age_data['breakdown']['65 and over'],
				 ];

	var legend_setup = {
		legend: ["Under 17: %%.%%", "18-24: %%.%%", "25-64: %%.%%", "65+: %%.%%"],
		legendpos: "east",
	}

	var xPosition = 320;
	var yPosition = 100;
	var radius = 55;
	pie = r.piechart(xPosition, yPosition, radius, values, legend_setup)

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
}
