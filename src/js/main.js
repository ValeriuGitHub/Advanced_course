// Google Map

var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.500956, lng: -0.124615},
      zoom: 8,
      styles: [
        {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#70cbbb"
          }
        ]
      }
    ]
  });
}

// Scroll for Anchor
  $(document).ready(function(){
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
        return false;
    });
});