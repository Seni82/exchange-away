const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = 'https://api.exchangeratesapi.io/latest';
let html = '';

$("#currentDay").text(moment().format("DD/M/YYYY"));
$("#currentDayForCurrency").text(moment().format("dddd do YYYY"));


$("#searchBtn").click(function(event) {
       console.log('button ccclicked')
       getWeather ();
       getFiveDayForcast ();
       saveToStorage();
   });


      ///Get weather for today
      function getWeather () {
       console.log('getWeather');
       let cityName = $("#cityname").val();
       let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=73b47f542215050a64d2b287364ee1d1`;
       console.log('weather infor', queryURL);
       
       // let cities = [];
       //    cities.push(cityName);
       //    //console.log('my cities', cities);

       //    let existingCities = JSON.parse(localStorage.getItem("new-cities"));
       //    //console.log("previously search", existingCities);
       //    let concatCities = cities.concat(existingCities);
       //    console.log("new cities", concatCities);

       //    let cityList = JSON.stringify(concatCities);
       //    console.log("hiya", cityList);

       //    localStorage.setItem("new-cities", cityList);
       //        cities.push(cityName);
       //        //get item takes one argument
       //       let existingList = JSON.parse(localStorage.getItem("new-cities"));
       //       let concatCities = cities.concat(existingList);
       //       console.log("new city", concatCities);
       //        let cityList = JSON.stringify(concatCities);
       //      /// set item takes on two arguments
       //        localStorage.setItem( "new-cities" , cityList);

       localStorage.clear;


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
      
      

       
     function getFiveDayForcast () {
       console.log('get forcast');
       let cityName = $("#cityname").val();
       let forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=73b47f542215050a64d2b287364ee1d1`
       let KELVIN = 273.15;

       $.ajax ({
          url: forcastUrl,
          success: function (resultForcast) {
              console.log(resultForcast);
            
               

              let C = Math.round(resultForcast.list[1].main.temp - KELVIN);
              let Celsius = C.toString();
     
              const day1Icon = resultForcast.list[1].weather[0].icon;
              const day1Link = "https://openweathermap.org/img/wn/" + day1Icon + ".png"
              $('.day1icon').attr('src', day1Link);
              $('#tempDay1').text(Celsius + " \u00B0C");
              $('#humidityDay1').text(resultForcast.list[1].main.humidity + " %");
              $('#Date1').text(moment().add(1, 'day').format("DD/M/YYYY"))
                
              //day 2

              
              C.toString();
              const day2Icon = resultForcast.list[2].weather[0].icon;
              const day2Link = "https://openweathermap.org/img/wn/" + day2Icon + ".png"
              $('.day2icon').attr('src', day2Link);
              $('#tempDay2').text(Celsius + " \u00B0C");
              $('#humidityDay2').text(resultForcast.list[2].main.humidity + " %");
              $('#Date2').text(moment().add(2, 'day').format("DD/M/YYYY"))
          }
          })
       }

       function saveToStorage(){
              let citySavedNames = $("#cityname").val();
        
              let cities;
              if(localStorage.getItem('T-Cities') === null){
                cities = [];
              }else{
                cities = JSON.parse(localStorage.getItem('T-Cities'))
              }
              cities.push(citySavedNames);
              localStorage.setItem('T-Cities', JSON.stringify(cities));
            }
        
            