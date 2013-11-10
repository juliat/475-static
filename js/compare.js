// just fake data to work with
// ones with numebrs are meant to be site id: value
var sites_megawatts = {
  'meta_values': {
    'min': 3,
    'max': 50,
    'average_proposed': 30,
    'average_opposed': 32,
    'average_active': 35,
  },
  'values': {
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
}

function RangeViz(name, values) {
  this.width = 600;
  this.height = 60;
  this.minValue = values['meta_values']['min'];
  this.maxValue = values['meta_values']['max'];
  this.metaValues = values['meta_values'];
  this.name = name;
  this.values = values['values'];
}

RangeViz.prototype._drawVerticalMarker = function(r, x, y, label) {
  // markers at each end
  var markerHeight = this.height/4;
  var markerY1 = (y-(markerHeight/2));
  var markerY2 = (y+(markerHeight/2));
  var markerLabelY = markerY2 + (markerHeight/2);

  // draw
  r.path("M"+x+","+markerY1+"V"+markerY2);
  r.text(x, markerLabelY, label);
}

RangeViz.prototype._drawValueMarker = function(r, valueX, y) {
    // draw circle at location (no labels right now)
    var color = "red";
    var radius = this.height/14;
    var valueCircle = r.circle(valueX, y, radius).attr({"fill": color});

    valueCircle.hover(
      // mouseover
      function () {
        console.log('hey');
        this.attr({"fill": "#444"});
      },
      // mouseout
      function () {
        this.attr({"fill": color});
      }
    );
}

RangeViz.prototype._drawMarkerSet = function(set, r, x, y, type) {
  var rangeWidth = this.width - x;
  
  // iterate over hash (set)
  for (var key in set) {
    // get value from values hash
    var value = set[key];
    // calculate x position proportionate to value
    var valueXOffset = (value/this.maxValue) * rangeWidth;
    var valueX = x + valueXOffset;

    if (type == 'value') {
      this._drawValueMarker(r, valueX, y);
    }
    else if (type == 'meta') {
      var label = key;
      this._drawVerticalMarker(r, valueX, y, label);
    }
  }  
}

// set up RangeViz class
RangeViz.prototype.draw = function(raphael, x, y) {
  var r = raphael;

  // draw title, left-aligned
  r.text(x, y, this.name).attr({
    'text-anchor': 'start',
    'font-weight': 'bold',
  });

  var titleBottomMargin = this.height/2;
  // everything will be drawn below title from here on out, so adjust y
  y = y+titleBottomMargin;
  var minX = x;
  var maxX = x + this.width;

  // draw base line/range
  // http://raphaeljs.com/reference.html#Paper.path
  r.path("M"+x+","+y+"H"+maxX);

  // draw meta markers
  this._drawMarkerSet(this.metaValues, r, x, y, 'meta');

  // draw value markers
  this._drawMarkerSet(this.values, r, x, y, 'value');
};


window.onload = function() {
  var width = 1000;
  var height = 1000;
  var r = Raphael("compare", width, height);

  var category = "megawatts";

  rangeViz = new RangeViz(category, sites_megawatts);
  rangeViz.draw(r, 100, 200);
}
