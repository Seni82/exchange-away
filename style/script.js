const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = 'https://api.exchangeratesapi.io/latest';
let html = '';

$("#currentDay").text(moment().format("DD/M/YYYY"));

$("#searchBtn").click(function(event) {
       console.log('button clicked')
       getWeather ();
   });


      ///Get weather for today
      function getWeather () {
       console.log('getWeather');
       let cityName = $("#cityname").val();
       let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=73b47f542215050a64d2b287364ee1d1`;
       console.log('weather infor', queryURL);
       

       let KELVIN = 273.15;
      
       $.ajax ({
         url: queryURL,
         success: function (result) {
             console.log(result);
             
             const mainIcon = result.weather[0].icon;
             const mainIconLink = "https://openweathermap.org/img/wn/" + mainIcon + ".png"
             $('#mainIcon').attr('src', mainIconLink);
             $('.location').text(result.name);
             let C = Math.round(result.main.temp - KELVIN);
                     let Celsius = C.toString();
                    $(".temp").text(Celsius + " \u00B0C");
             $('.humidityNr').text(result.main.humidity + " %");
             $('.windValue').text(result.wind.speed + " MPH");
 
             $('.description').text(result.weather[0].description);
         
 
          
           
 
         }
       })
     }
      
      

       
      
       
   
async function currency(){

       const res = await fetch(API_URL);
       console.log(res);
       const data = await res.json();
      // console.log(data.rates);
       const arrKeys = Object.keys(data.rates);
       const rates = data.rates;
      console.log(rates);
       arrKeys.map(item =>{
              return html += `<option value=${item}>${item}</option>`;
       });
       
       for(let i=0; i<select.length; i++){
              select[i].innerHTML = html;
       };

       function convert(i,j){
              input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
       }

       input[0].addEventListener('keyup', ()=> convert(1,0))

       input[1].addEventListener('keyup', ()=> convert(0,1))

       select[0].addEventListener('change', ()=> convert(1,0))

       select[1].addEventListener('change', ()=> Math.round(convert(0,1)))

      

      
};

currency();