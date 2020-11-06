var currency1;
var currency2;
var rate1;
var rate2;
function callCurrenciesAndRates() {
  currency1 = currencyCodes[$("input[name='country1']").val().toUpperCase()];
  currency2 = currencyCodes[$("input[name='country2']").val().toUpperCase()];
  //GET https://api.exchangeratesapi.io/latest?symbols=USD,GBP HTTP/1.1 < from this i can now work and recieve the result
  $.get(
    `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`,
    function (data, status) {
      //Rates display

      rate2 = data.rates[currency2];
      //Get the rates from the API, and link to the html, This will show the latest exchange rates in the browser.

      $(".rate2").html(rate2);
      //Date to display
      $(".date").html(data.date);
    }
  );
}
$(document).ready(function () {
  $(".ui.sidebar").sidebar("attach events", ".toc.item");

  $(".ui.dropdown").dropdown();

  $(".ui.buttons .dropdown.button").dropdown({
    action: "combo",
  });

  loadCurrencyLocally();
  callCurrenciesAndRates();

  $(".dropdown").click(function () {
    callCurrenciesAndRates();
  });

 /* $("input[name='amount1']").keyup(function () {
    var val1 = $("input[name='amount1']").val();
    var convertedVal = (val1 / rate1) * rate2;
    $("input[name='amount2']").val(convertedVal);
  });
  $("input[name='amount2']").keyup(function () {
    var val1 = $("input[name='amount2']").val();
    var convertedVal = (val1 / rate2) * rate1;

    $("input[name='amount1']").val(convertedVal);
  });*/
});


const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
const API_URL = "https://api.exchangeratesapi.io/latest";
let html = "";

$("#currentDay").text(moment().format("DD/M/YYYY"));
$("#currentDayForCurrency").text(moment().format("dddd do MMMM YYYY"));

//Takes the value entered in the input box and takes the value entered
/*$("input[name='amount1']").keyup(function () {
  var val1 = $("input[name='amount1']").val();
  //Convert base rate to required currency - left hand side box
  var convertedVal = (val1 / rate1) * rate2;
  $("input[name='amount2']").val(convertedVal);
});*/
//Convert base currency right hand side box
$("input[name='amount1']").keyup(function () {
  var val1 = $("input[name='amount1']").val();
  var convertedVal = (val1 * rate2) 
   $("input[name='amount2']").val(convertedVal);
});

var currencyCodes = {
  BD: "BDT",
  BE: "EUR",
  BF: "XOF",
  BG: "BGN",
  BA: "BAM",
  BB: "BBD",
  WF: "XPF",
  BL: "EUR",
  BM: "BMD",
  BN: "BND",
  BO: "BOB",
  BH: "BHD",
  BI: "BIF",
  BJ: "XOF",
  BT: "BTN",
  JM: "JMD",
  BV: "NOK",
  BW: "BWP",
  WS: "WST",
  BQ: "USD",
  BR: "BRL",
  BS: "BSD",
  JE: "GBP",
  BY: "BYR",
  BZ: "BZD",
  RU: "RUB",
  RW: "RWF",
  RS: "RSD",
  TL: "USD",
  RE: "EUR",
  TM: "TMT",
  TJ: "TJS",
  RO: "RON",
  TK: "NZD",
  GW: "XOF",
  GU: "USD",
  GT: "GTQ",
  GS: "GBP",
  GR: "EUR",
  GQ: "XAF",
  GP: "EUR",
  JP: "JPY",
  GY: "GYD",
  GG: "GBP",
  GF: "EUR",
  GE: "GEL",
  GD: "XCD",
  GB: "GBP",
  GA: "XAF",
  SV: "USD",
  GN: "GNF",
  GM: "GMD",
  GL: "DKK",
  GI: "GIP",
  GH: "GHS",
  OM: "OMR",
  TN: "TND",
  JO: "JOD",
  HR: "HRK",
  HT: "HTG",
  HU: "HUF",
  HK: "HKD",
  HN: "HNL",
  HM: "AUD",
  VE: "VEF",
  PR: "USD",
  PS: "ILS",
  PW: "USD",
  PT: "EUR",
  SJ: "NOK",
  PY: "PYG",
  IQ: "IQD",
  PA: "PAB",
  PF: "XPF",
  PG: "PGK",
  PE: "PEN",
  PK: "PKR",
  PH: "PHP",
  PN: "NZD",
  PL: "PLN",
  PM: "EUR",
  ZM: "ZMK",
  EH: "MAD",
  EE: "EUR",
  EG: "EGP",
  ZA: "ZAR",
  EC: "USD",
  IT: "EUR",
  VN: "VND",
  SB: "SBD",
  ET: "ETB",
  SO: "SOS",
  ZW: "ZWL",
  SA: "SAR",
  ES: "EUR",
  ER: "ERN",
  ME: "EUR",
  MD: "MDL",
  MG: "MGA",
  MF: "EUR",
  MA: "MAD",
  MC: "EUR",
  UZ: "UZS",
  MM: "MMK",
  ML: "XOF",
  MO: "MOP",
  MN: "MNT",
  MH: "USD",
  MK: "MKD",
  MU: "MUR",
  MT: "EUR",
  MW: "MWK",
  MV: "MVR",
  MQ: "EUR",
  MP: "USD",
  MS: "XCD",
  MR: "MRO",
  IM: "GBP",
  UG: "UGX",
  TZ: "TZS",
  MY: "MYR",
  MX: "MXN",
  IL: "ILS",
  FR: "EUR",
  IO: "USD",
  SH: "SHP",
  FI: "EUR",
  FJ: "FJD",
  FK: "FKP",
  FM: "USD",
  FO: "DKK",
  NI: "NIO",
  NL: "EUR",
  NO: "NOK",
  NA: "NAD",
  VU: "VUV",
  NC: "XPF",
  NE: "XOF",
  NF: "AUD",
  NG: "NGN",
  NZ: "NZD",
  NP: "NPR",
  NR: "AUD",
  NU: "NZD",
  CK: "NZD",
  XK: "EUR",
  CI: "XOF",
  CH: "CHF",
  CO: "COP",
  CN: "CNY",
  CM: "XAF",
  CL: "CLP",
  CC: "AUD",
  CA: "CAD",
  CG: "XAF",
  CF: "XAF",
  CD: "CDF",
  CZ: "CZK",
  CY: "EUR",
  CX: "AUD",
  CR: "CRC",
  CW: "ANG",
  CV: "CVE",
  CU: "CUP",
  SZ: "SZL",
  SY: "SYP",
  SX: "ANG",
  KG: "KGS",
  KE: "KES",
  SS: "SSP",
  SR: "SRD",
  KI: "AUD",
  KH: "KHR",
  KN: "XCD",
  KM: "KMF",
  ST: "STD",
  SK: "EUR",
  KR: "KRW",
  SI: "EUR",
  KP: "KPW",
  KW: "KWD",
  SN: "XOF",
  SM: "EUR",
  SL: "SLL",
  SC: "SCR",
  KZ: "KZT",
  KY: "KYD",
  SG: "SGD",
  SE: "SEK",
  SD: "SDG",
  DO: "DOP",
  DM: "XCD",
  DJ: "DJF",
  DK: "DKK",
  VG: "USD",
  DE: "EUR",
  YE: "YER",
  DZ: "DZD",
  US: "USD",
  UY: "UYU",
  YT: "EUR",
  UM: "USD",
  LB: "LBP",
  LC: "XCD",
  LA: "LAK",
  TV: "AUD",
  TW: "TWD",
  TT: "TTD",
  TR: "TRY",
  LK: "LKR",
  LI: "CHF",
  LV: "EUR",
  TO: "TOP",
  LT: "LTL",
  LU: "EUR",
  LR: "LRD",
  LS: "LSL",
  TH: "THB",
  TF: "EUR",
  TG: "XOF",
  TD: "XAF",
  TC: "USD",
  LY: "LYD",
  VA: "EUR",
  VC: "XCD",
  AE: "AED",
  AD: "EUR",
  AG: "XCD",
  AF: "AFN",
  AI: "XCD",
  VI: "USD",
  IS: "ISK",
  IR: "IRR",
  AM: "AMD",
  AL: "ALL",
  AO: "AOA",
  AQ: "",
  AS: "USD",
  AR: "ARS",
  AU: "AUD",
  AT: "EUR",
  AW: "AWG",
  IN: "INR",
  AX: "EUR",
  AZ: "AZN",
  IE: "EUR",
  ID: "IDR",
  UA: "UAH",
  QA: "QAR",
  MZ: "MZN",
  EU: "EUR",
};

// Link from the exchangeratesapi.io -The one i have used is the > request specific exchange rates by setting the symbols parameter usd and gbp
// Exchange rates between the two currencies were in respect of the base currencies usd and gbp i understood that then got the base currencies accordingly
// A converstion logic added devided by the first and multiplied by the second currency
// Need to work on getting my currency converter onto the centre of the page
$("#searchBtn").click(function (event) {
  console.log("button ccclicked");
  getWeather();
  getFiveDayForcast();
  saveWeatherToStorage();
});

$(".currencyVal").on("change", function (e) {
  console.log("currency selected");
  saveCurrencyLocally();
});

///Get weather for today
function getWeather() {
  console.log("getWeather");
  let cityName = $("#cityname").val();
  let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=73b47f542215050a64d2b287364ee1d1`;
  console.log("weather infor", queryURL);

  let KELVIN = 273.15;

  $.ajax({
    url: queryURL,
    success: function (result) {
      console.log(result);

      const mainIcon = result.weather[0].icon;
      const mainIconLink =
        "https://openweathermap.org/img/wn/" + mainIcon + ".png";
      $("#mainIcon").attr("src", mainIconLink);
      $(".location").text(result.name);
      let C = Math.round(result.main.temp - KELVIN);
      let Celsius = C.toString();
      $(".temp").text(Celsius + " \u00B0C");
      $(".humidityNr").text(result.main.humidity + " %");
      $(".windValue").text(result.wind.speed + " MPH");

      $(".description").text(result.weather[0].description);
    },
  });
}

function getFiveDayForcast() {
  console.log("get forcast");
  let cityName = $("#cityname").val();
  let forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=73b47f542215050a64d2b287364ee1d1`;
  let KELVIN = 273.15;

  $.ajax({
    url: forcastUrl,
    success: function (resultForcast) {
      console.log(resultForcast);

      let C = Math.round(resultForcast.list[1].main.temp - KELVIN);
      let Celsius = C.toString();

      const day1Icon = resultForcast.list[1].weather[0].icon;
      const day1Link = "https://openweathermap.org/img/wn/" + day1Icon + ".png";
      $(".day1icon").attr("src", day1Link);
      $("#tempDay1").text(Celsius + " \u00B0C");
      $("#humidityDay1").text(resultForcast.list[1].main.humidity + " %");
      $("#Date1").text(moment().add(1, "day").format("DD/M/YYYY"));

      //day 2

      C.toString();
      const day2Icon = resultForcast.list[2].weather[0].icon;
      const day2Link = "https://openweathermap.org/img/wn/" + day2Icon + ".png";
      $(".day2icon").attr("src", day2Link);
      $("#tempDay2").text(Celsius + " \u00B0C");
      $("#humidityDay2").text(resultForcast.list[2].main.humidity + " %");
      $("#Date2").text(moment().add(2, "day").format("DD/M/YYYY"));
    },
  });
}

//   function saveCurrencyToStorage(){
//          let cityCurrencyValue = $(".country").HTML();

//          let currency;
//          if(localStorage.getItem('currency-searched') === null){
//            currency = [];
//          }else{
//           currency = JSON.parse(localStorage.getItem('currency-searched'))
//          }
//          currency.push(cityCurrencyValue);
//          localStorage.setItem('currency-searched', JSON.stringify(currency));
//        }

function saveCurrencyLocally() {
  let currencyObj = {
    currencyOne: $("#countryOne").dropdown("get value"),
    currencyTwo: $("#countryTwo").dropdown("get value"),
  };

  //currencyOne.push(firstCountry);
  localStorage.setItem("currency-searched", JSON.stringify(currencyObj));
}

function loadCurrencyLocally() {
     const loadCurLocally = JSON.parse(localStorage.getItem("currency-searched"));
     console.log("search currency", loadCurLocally);
     if (loadCurLocally){
          $("#countryOne").dropdown("set selected", loadCurLocally.currencyOne);
          $("#countryTwo").dropdown("set selected", loadCurLocally.currencyTwo);
          

     }
}

function saveWeatherToStorage() {
  let citySavedNames = $("#cityname").val();

  let cities;
  if (localStorage.getItem("input-Cities") === null) {
    cities = [];
  } else {
    cities = JSON.parse(localStorage.getItem("input-Cities"));
  }
  cities.push(citySavedNames);
  localStorage.setItem("input-Cities", JSON.stringify(cities));
}
