// Map Boundary size
var img = [
  5000,
  2321
];

// Initialize the map and assign it to a variable for later use
var map = L.map('map', {
    // Simple Square Map
    crs: L.CRS.Simple,
    minZoom: 3
});

// assign map id, image and tile dimensions
var rc = new L.RasterCoords(map, img, 200);
// set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
map.setMaxZoom(5);
// all coordinates need to be unprojected using the `unproject` method
// set the view in the lower right edge of the image
//map.setView(rc.unproject([4332, 1782]), 3);
map.setView(rc.unproject([3134, 852]), 4);

L.tileLayer('img/tiles/{z}/{x}/{y}.png', {
  noWrap: true
}).addTo(map)

// Attractions Coordinates // ([y, x]) coordinates equal ([lat, lng])
var attr1 = rc.unproject([3142, 1048]), // Blue Man Group
    attr2 = rc.unproject([3288, 994]), // Hollywood Rip Ride ROCKIT
    attr3 = rc.unproject([3364, 860]), // Race Through New York Starring Jimmy Fallon
    attr4 = rc.unproject([3564, 764]), // Revenge of the Mummy
    attr5 = rc.unproject([3588, 980]), // Transformers The Ride - 3D
    attr6 = rc.unproject([3512, 1094]), // Shrek 4D
    attr7 = rc.unproject([3400, 1050]); // Dispicable Me Minion Mayhem

var usf1 = L.marker(attr1).bindPopup('Blue Man Group').on('click', onMarkerClick),
usf2 = L.marker(attr2).bindPopup('Hollywood Rip Ride ROCKIT').on('click', onMarkerClick),
usf3 = L.marker(attr3).bindPopup('Race Through New York Starring Jimmy Fallon').on('click', onMarkerClick),
usf4 = L.marker(attr4).bindPopup('Revenge of the Mummy').on('click', onMarkerClick),
usf5 = L.marker(attr5).bindPopup('Transformers The Ride - 3D').on('click', onMarkerClick),
usf6 = L.marker(attr6).bindPopup('Shrek 4D').on('click', onMarkerClick),
usf7 = L.marker(attr7).bindPopup('Dispicable Me Minion Mayhem').on('click', onMarkerClick);

// Group Attractions
var usfGroup = L.layerGroup([usf1, usf2, usf3, usf4, usf5, usf6, usf7]);
// Ad to Map
// usfGroup.addTo(map);
map.addLayer(usfGroup);

// Gives Map Coordinates on click For TESTING
map.on('click', onMarkerClick);
// Marker Click functions
function onMarkerClick(e) {
    var coords = rc.project(e.latlng);
    console.log("Marker Clicked at Coords " + coords);
    console.log("Marker Clicked at " + e.latlng);
    // Center map to Marker latlng
    map.setView(e.latlng);
}
