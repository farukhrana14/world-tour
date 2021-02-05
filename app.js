fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));


function displayCountries(countries) {
    const allCountries = document.getElementById("all-countries");

    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p id="capital-name">${country.capital}</p>
            <button onclick='displayCountryDetails("${country.name}")'>Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        allCountries.appendChild(countryDiv);
    });
}

const displayCountryDetails = name => {
    // const url = `https://restcountries.eu/rest/v2/name/${name}` 
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const renderDiv = document.getElementById("country-details");
    renderDiv.innerHTML = `
    <h4>Country: ${country.name}</h4>
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area}</p>
    <img src="${country.flag}"></img>
    
    `


}



// function displayCountries(countries) {
//     const allCountries = document.getElementById("all-countries");


//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const countryDiv = document.createElement("div");
//         countryDiv.className = 'country';

//         const countryInfo = `
//             <h3 class="country-name">${country.name}</h3>
//             <p>${country.capital}</p>
//         `
//         countryDiv.innerHTML = countryInfo;

//         allCountries.appendChild(countryDiv);
//     }
// }




// function displayCountries(countries) {
//     const allCountries = document.getElementById("all-countries");


//     for (let i = 0; i < countries.length; i++) {

//         const countryDiv = document.createElement("div");
//         const h3 = document.createElement("h3");
//         const p = document.createElement("p");

//         const country = countries[i];
//         h3.innerText = country.name;
//         p.innerText = country.capital;
//         countryDiv.appendChild(h3);
//         countryDiv.appendChild(p);
//         allCountries.appendChild(countryDiv);
//     }
// }















// function displayCountries(countries) {
//     const ul = document.getElementById("countries");
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const li = document.createElement('li');
//         li.innerText = country.name;
//         ul.appendChild(li);
//     }
// }
