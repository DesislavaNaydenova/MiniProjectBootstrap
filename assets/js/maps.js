function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 47.416450,
            lng: 11.878390
        }
    });

    var labels= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        {lat: 43.270599, lng: 26.923380},
        {lat: 48.135124, lng: 11.581981},
        {lat: 44.231171, lng: -76.485954},
        {lat: 6.9259284, lng: 79.878178}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerClusterer =new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}