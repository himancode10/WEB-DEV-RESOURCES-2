'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////////



const renderCountry = function(data, classname = ''){
  
    const html = `
  <article class="country ${classname}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

  // const getCountryData = function (country){
  //   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
 

  const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    //COUNTRY DATA

    // fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(res=>console.log(res))

    //OR

    const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryCode}`);
    const data = await res.json();
    console.log(data);

    renderCountry(data[0]);
  
  };
  
  whereAmI();
  console.log('first');