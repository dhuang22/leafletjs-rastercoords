// Original Startup JS
// Initialize the map and assign it to a variable for later use
var map = L.map('map', {
    // Set latitude and longitude of the map center (required)
    center: [12.99766, -84.90838],
    // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
    zoom: 5
});

// Create a Tile Layer and add it to the map
//var tiles = new L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png').addTo(map);

var bounds = [[0,0], [1000,2154]];
// Add Image as Map
var image = L.imageOverlay('img/map5000x2321.jpg', bounds).addTo(map);

// Show whole Map
map.fitBounds(bounds);
// Set Max Bounds (bounces back to map)
map.setMaxBounds(bounds);
// Set Center View on USF
map.setView( [598, 1671], 0);

// Attractions Coordinates // ([y, x]) coordinates equal ([lat, lng])
var attr1 = ([538, 1380]), // Blue Man Group
    attr2 = ([600, 1394]), // Hollywood Rip Ride ROCKIT
    attr3 = ([620, 1450]), // Race Through New York Starring Jimmy Fallon
    attr4 = ([670, 1529]), // Revenge of the Mummy
    attr5 = ([576, 1546]), // Transformers The Ride - 3D
    attr6 = ([542, 1517]), // Shrek 4D
    attr7 = ([542, 1463]); // Dispicable Me Minion Mayhem

// Universal Studios Florida
var usf1 = L.marker(attr1).bindPopup('Blue Man Group').on('click', onMarkerClick),
  usf2 = L.marker(attr2).bindPopup('Hollywood Rip Ride ROCKIT').on('click', onMarkerClick),
  usf3 = L.marker(attr3).bindPopup('Race Through New York Starring Jimmy Fallon').on('click', onMarkerClick),
  usf4 = L.marker(attr4).bindPopup('Revenge of the Mummy').on('click', onMarkerClick),
  usf5 = L.marker(attr5).bindPopup('Transformers The Ride - 3D').on('click', onMarkerClick),
  usf6 = L.marker(attr6).bindPopup('Shrek 4D').on('click', onMarkerClick),
  usf7 = L.marker(attr7).bindPopup('Dispicable Me Minion Mayhem').on('click', onMarkerClick);


// Universal Studios Florida Group
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
