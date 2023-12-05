var latitude ;
var longitude ;  
var latlong;
const getLocation=async ()=> {
    await navigator.geolocation.getCurrentPosition(
    function(position) { 
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); 
        console.log(typeof latitude)
    }); 

} 

const setLocation=async ()=>{ 
        await getLocation(); 
        console.log("Failed to wait")
        var map = L.map('map').setView([12.9889,79.9702], 13);
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19 
        }).addTo(map);
        latlng = {
            lat:latitude,
            lng:longitude
        };    
}

setLocation();

// const markLocation=()=>{
//     var marker =L.marker(latlng).addTo(map); 
// }


