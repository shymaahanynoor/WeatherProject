var inputSearch=document.getElementById("input-search");
var btnSearch=document.getElementById("btn-search");
var card=document.getElementById("card");
var datalist={}
let data=new Date()
console.log(data.getDay());
let search=localStorage.getItem("lastsearch");
console.log(search);

 city(search);
 async function city(search){
  let api=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e6bc4b6f496c4c4cb94205947231702&q=${search}&days=3`)
 let response=await api.json()

 datalist=response;
 display()
 console.log(response)       

}
btnSearch.addEventListener("click", function(){
  
    city(inputSearch.value);

    localStorage.setItem("lastsearch",inputSearch.value );

  
})
 var days=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
 var month=["","Jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]



function display(){

    var day=datalist.forecast.forecastday[0].date
    let myday = day.split("")
 
    console.log(myday);
    temp=`
    <div class="col-md-4 col-sm-12  p-0 rounded-start ">
      <p>${days[data.getDay()]}<span>${myday[8]+myday[9]+" "}${month[myday[6]]}</span></p>
      <div class="info">
      <h5 >${datalist.location.name}</h5>
      <h1 class="text-light ">${datalist.current.temp_c}<sup>o</sup>C<img src="https:${datalist.current.condition.icon}"  width="15%" style="margin-left:30%"></h1>
    <span class="d-block text-primary pb-3">${datalist.current.condition.text}</span>
      <span><img src="image/icon-umberella (1).png"class="me-2">${datalist.current.humidity}%</span>
      <span class="ps-3"><img src="image/icon-wind (1).png" class="me-2">${datalist.current.wind_kph}km/h</span>
      <span class="ps-3"><img src="image/icon-compass (1).png" class="me-2">${datalist.current.wind_dir}</span>

    </div>
  </div>
    <div class="col-md-4 col-sm-12  p-0 text-center">
      <p style="background-color: #222530;">${days[data.getDay()+1]}</p>
     <img src="https:${datalist.forecast.forecastday[1].day.condition.icon}" width="12%"  class="pt-5">
     <span class="d-block fw-bold text-light fs-4">${datalist.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup> C</span>
     <span class="d-block">${datalist.forecast.forecastday[1].day.mintemp_c}<sup>o</sup> C</span>
     <span class="d-block pt-3 text-primary">${datalist.forecast.forecastday[1].day.condition.text}</span>
    </div>
    <div class="col-md-4 col-sm-12  p-0 rounded-end rounded-start text-center ">
    <p style="background-color: #222530;">${days[data.getDay()+2]}</p>
      <img src="https:${datalist.forecast.forecastday[2].day.condition.icon}" width="12%"  class="pt-5">
      <span class="d-block fw-bold text-light fs-4">${datalist.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup> C</span>
      <span class="d-block">${datalist.forecast.forecastday[2].day.mintemp_c} <sup>o</sup> C</span>
      <span class="d-block pt-3 text-primary">${datalist.forecast.forecastday[2].day.condition.text}</span>
     
      </div>`
      card.innerHTML=temp
    
    }

    

