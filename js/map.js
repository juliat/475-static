/**
 * This is a hack for the demo. We need to integrate this with the ember stuff.
 */

(function () {
  var map;

  function plotMarkers (sites) {
    var maxLat;
    var maxLong;
    var minLat;
    var minLong;

    $.each(sites, function (i, site) {
      var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        map: map,
        position: new google.maps.LatLng(site.latitude, site.longitude),
        title: site.name
      });

      if (maxLat === undefined || site.latitude > maxLat) {
        maxLat = site.latitude;
      }
      if (minLat === undefined || site.latitude < minLat) {
        minLat = site.latitude;
      }
      if (maxLong === undefined || site.longitude > maxLong) {
        maxLong = site.longitude;
      }
      if (minLong === undefined || site.longitude < minLong) {
        minLong = site.longitude;
      }
    });

    var paddingFactor = 0.03;
    var latPadding = (maxLat - minLat) * paddingFactor;
    var longPadding = (maxLong - minLong) * paddingFactor;

    var minLatBound = minLat - latPadding;
    var maxLatBound = maxLat + latPadding;
    var minLongBound = minLong - longPadding;
    var maxLongBound = maxLong + longPadding;

    var bottomLeft = new google.maps.LatLng(minLatBound, minLongBound);
    var topRight = new google.maps.LatLng(maxLatBound, maxLongBound);

    var bounds = new google.maps.LatLngBounds(bottomLeft, topRight);

    map.panTo(
      new google.maps.LatLng(
        ((maxLatBound - minLatBound) / 2) + minLat,
        ((maxLongBound - minLongBound) / 2) + minLong
      )
    );
    map.fitBounds(bounds);
  }

  function initialize () {
    setTimeout(function () {
      var mapOptions = {
        center: new google.maps.LatLng(40.4417, -80),
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 5
      };

      map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

      plotMarkers([
        {
          latitude: 43.6078891,
          longitude: -73.74778569999999,
          name: "Warren County, NY"
        },
        {
          latitude: 35.171723,
          longitude: -103.7249662,
          name: "Tucumcari, NM"
        },
        {
          latitude: 45.0230422,
          longitude: -104.4124527,
          name: "Alzada, MT"
        },
        {
          latitude: 47.37195819999999,
          longitude: -102.7540751,
          name: "Killdeer, ND"
        }
      ]);
    }, 100);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
})();
