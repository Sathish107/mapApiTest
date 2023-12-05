var map = L.map('map').fitWorld()

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19 
}).addTo(map); 
 

const myMarker=L.icon({
    iconUrl:'myMarker1.png',
    iconSize:[40,40]
})

// var marker = L.marker([12.9889,79.9702],{icon:myMarker}).addTo(map);
// marker.bindPopup('hello world').openPopup()

var lat;
var long;
var acc;
var currentZoomLevel=13;

const markLocation=()=>{
    if(!navigator.geolocation){
        console.log('Your browser doesnt support geolocation feature')
    }else{
        navigator.geolocation.getCurrentPosition((position)=>{
            lat=position.coords.latitude
            long=position.coords.longitude
            acc=position.coords.accuracy
    
            map.setView([lat,long],currentZoomLevel)

            L.marker([lat,long],{icon:myMarker})
            .addTo(map)
            .bindPopup("This is my <b>location</b>")
            .openPopup()
        })
    } 
} 
 
const updateLocation = () => {
    markLocation();
    currentZoomLevel=map.getZoom()
    setTimeout(updateLocation, 3000);
};

updateLocation();

 




 