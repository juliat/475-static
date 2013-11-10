// just fake data to work with
// ones with numebrs are meant to be site id: value
var sites_megawatts = {
  'min': 3,
  'max': 50,
  'average_proposed': 30,
  'average_opposed': 32,
  'average_active': 35,
  '1': 20,
  '2': 40,
  '3': 35,
  '4': 12,
  '5': 3,
  '6': 23,
  '7': 17,
  '8': 28,
  '9': 34,
  '10': 34,
  '11': 25,
  '12': 15,
  '13': 5,
  '14': 18,
  '15': 33,
  '16': 31
}

function RangeViz(name, values) {
  this.width = 400;
  this.height = 30;
  this.minValue = values['min'];
  this.maxValue = values['max'];
  this.name = name;
  this.values = values;
}

// set up RangeViz class
RangeViz.prototype.draw = function(r, x, y) {
  // draw title
  var titleX = x;
  var titleY = y;
  // draw title, left-aligned
  r.text(titleX, titleY, this.name).attr({'text-anchor': 'start'});

  // viz is 50px below title
  y = y+50;

  // draw base line
  // http://raphaeljs.com/reference.html#Paper.path
  r.path("M"+x+","+y+"H"+(x+this.width));

  var rangeWidth = this.width - x;

  // draw dots along line at x locations proportionate to their values
  for (var key in this.values) {
    // get value from values hash
    var value = this.values[key];
    // calculate x position proportionate to value
    var valueXOffset = (value/this.maxValue) * rangeWidth;
    var valueX = x + valueXOffset;

    // draw circle at location (no labels right now)
    var color = "#000";
    var radius = 2;
    r.circle(valueX, y, radius).attr({fill: color});
  }
};


window.onload = function() {
  var width = 1000;
  var height = 1000;
  var r = Raphael("compare", width, height);

  var category = "megawatts";

  barViz = new RangeViz(category, sites_megawatts);
  barViz.draw(r, 100, 200);
}
