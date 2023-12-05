var map = L.map('map').setView([12.9889,79.9702], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19 
}).addTo(map);


//add a marker
var marker = L.marker([12.9889,79.9702]).addTo(map);


//add a circle 
// var circle = L.circle([12.9889,79.9702], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);



//popups
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); 

// var popup = L.popup()
//     .setLatLng([12.9889,79.9702])
//     .setContent("I am a standalone popup.")
//     .openOn(map);  

// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

var popup = L.popup();

function onMapClick(e) {
    map.removeLayer(marker)
    marker=L.marker([e.latlng.lat,e.latlng.lng]).addTo(map)
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);

        console.log(e.latlng)
}

map.on('click', onMapClick); 