var fn = {
    ready: function(){
      document.addEventListener("deviceready",fn.init, false);  
    },
    init: function(){
      //fn.dibujarMapa(19.054075, -98.223288);  
        navigator.geolocation.getCurrentPosition(fn.posicionObtenida, fn.error);
    },
    posicionObtenida: function(p){
        fn.dibujarMapa(p.coords.latitude, p.coords.longitude);
    }, 
    error: function(){
      alert(err.message);  
    },
    dibujarMapa: function (lat, lng){
        var latlng = new google.maps.LatLng(lat, lng);
				var myOptions = {
					zoom: 20,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
				//Marcador
				var marker = new google.maps.Marker({
					position: latlng, 
					map: map, 
					title:"Mi posición"
				});
    },
};
$(fn.ready);