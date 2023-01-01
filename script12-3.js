$(document).ready(function(){  

$('#btnGetWeather').on('click',function(){
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=a7c299dccef963e03ce5b5982aec051d&q=';
    weatherUrl += $('#txtCity').val();
    weatherUrl += '&units=metric&lang=nl';

    $.ajax({
        url:weatherUrl,
        success:function(weather){
            console.log(weather);
    
            var html = '<strong>'+ weather.name;
            html +='('+ weather.sys.country + ')</strong><br/>';
            html += 'Temperatuur: ' + weather.main.temp + 'graden<br/>';
            html += 'Temperatuur voelt als: ' + weather.main.feels_like + 'graden<br/>';
            html += 'Vochtigheid: ' + weather.main.humidity + 'procent<br/>';
            html += 'Maximum temperatuur: ' + weather.main.temp_max + 'graden<br/>';
            html += 'Minimum temperatuur: ' + weather.main.temp_min + 'graden<br/>';
            html += 'Wind: ' + weather.wind.speed + 'km/h <br/>';
            html += 'Aantal wolken: ' + weather.clouds.all + '<br/>';
            $('#divResult').append(html);            
        } 
    })

})

});