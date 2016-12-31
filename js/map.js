var map;

var markerimage = {
  url: 'img/map/marker.png',
  size: new google.maps.Size(31,50),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16,50),
  scaledSize: new google.maps.Size(31, 50)
};

function initMap() {

  var uluru = {lat: 37.544935, lng:  127.039454};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: markerimage
  });
}

$(document).ready(function() {

  initMap();
});
