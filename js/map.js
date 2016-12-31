var map;

var markerimage = {
  url: 'img/map/mark.png',
  size: new google.maps.Size(217,352),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16,50),
  scaledSize: new google.maps.Size(32, 50)
};

function initMap() {

  var seoulforest = {lat: 37.544935, lng:  127.039454};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: seoulforest,
    scrollwheel: false,
  });
  var marker = new google.maps.Marker({
    position: seoulforest,
    map: map,
    icon: markerimage
  });
}

$(document).ready(function() {

  initMap();
});
