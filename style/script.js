const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = 'https://api.exchangeratesapi.io/latest';
let html = '';


async function currency(){

       const res = await fetch(API_URL);
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