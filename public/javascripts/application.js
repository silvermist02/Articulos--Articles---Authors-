// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(function() {
  $('#author_birthday').datepicker( {
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    yearRange: '1975:2005'
  });
  
  $commentForm = $("#comment-form");
  $commentForm.hide();
  $("#add-comment").click(function(){
    $commentForm.fadeIn();
   // $(this).html("Hide form");
  });
  
  $("#welcome").hide();
  $("#quote").hide();
  $("#index-page").hide();
  
  $("#welcome").fadeIn(1000);
  $("#quote").fadeIn(1000);
  $("#index-page").fadeIn(1000);
  
  $("#nav ul li:eq(1)").hover(
  function()
  {
    $(this).find(".sub-nav").fadeIn();
    $(this).find("a:eq(0)").css("border", "none");
  },
  function()
  {
    $(this).find(".sub-nav").fadeOut();
    $(this).find("a:eq(0)").css("border-bottom", "1px solid #A87C4F");
  });
  
  $("#nav ul li:eq(5)").hover(
  function()
  {
    $(this).find(".sub-nav").fadeIn();
    $(this).find("a:eq(0)").css("border", "none");
  },
  function()
  {
    $(this).find(".sub-nav").fadeOut();
    $(this).find("a:eq(0)").css("border-bottom", "1px solid #A87C4F");
  });
  
});

var map;
var geocoder;
var lat = 10.3111111;
var lng = 123.8916667;
var infowindow = new google.maps.InfoWindow();

function initialize(lat, lng, add) {
  var latlng = new google.maps.LatLng(lat, lng);
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  }
  
  map = new google.maps.Map(document.getElementById("map_canvas"), options);
    
  var marker = new google.maps.Marker({
      position: latlng,
      //draggable: true,
      position: latlng
  });
  
  // To add the marker to the map, call setMap();
  marker.setMap(map);
  
        // add listener to marker
  google.maps.event.addListener(marker, "dragend", function() {
    var point = marker.getPosition();
    map.panTo(point);
    document.getElementById("place_latitude").value = point.lat();
    document.getElementById("place_longitude").value = point.lng();
  });
  
  infowindow.setContent(add);
  infowindow.open(map, marker);
}
