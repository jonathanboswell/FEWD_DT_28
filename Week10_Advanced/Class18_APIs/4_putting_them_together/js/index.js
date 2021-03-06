$(function(){
    $('#lookup').on('click', function(clickEvent){
        var encoded_address = encodeURIComponent($('#address').val());
        console.log($('#address').val(), encoded_address);

        //The GET request that Google expects:
        //https://maps.googleapis.com/maps/api/geocode/json?&address=360%20E%202nd%20Street%2C%20Los%20Angeles%2C%20CA
        var request_url = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + encoded_address
        console.log(request_url);

        //Make an API request to the request_url and write an anonymous function to handle the response
        $.get(request_url,function(response){
            console.log(response);

            var lat = response["results"][0]["geometry"]["location"]["lat"];
            var lng = response["results"][0]["geometry"]["location"]["lng"];

            $('#lat').text(lat);
            $('#long').text(lng);

            //Step 1 - add "lat" and "lng" keys to the position object
            //         and assign their value to the lat and lng variables above
            var position = {};

            //Step 2 - invoke loadMap and pass it your position object as a variable
            
        });
    });
});

//The Callback function we tell Google to call once the map script is loaded
function loadMap(position) {
    if(!position)
    {
        var position = { lat: 34.0478914, lng: -118.2401423 };
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: position
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map,
    });
}