countryContainer = document.getElementById("country_container");

countryContainer.innerHTML ='';


const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all').then(res=>res.json()).then(data=>displayCountries(data.slice(0,30)))
}

const displayCountries = ( countries )=>{
    countries.map(country =>{displayCountry(country)})
}

const displayCountry = ({name, flags, capital, region, population, languages})=>{
    countryContainer.innerHTML += `
        <div class="col-4 mb-2">
            <div class="card">
            <div class="card-body">
                    <img src="${flags.png}" style="width: 18rem; height: 8rem; border:1px solid gray" class="card-img-top " alt="${flags.alt}"> 
                <h5 class="card-title my-4 text-center text-danger fw-bold">${name.common}</h5><hr>
                <p class="my-4 text-danger fw-bold text-center">Capital: ${capital[0]}</p><hr>
                <p class="my-4 text-danger fw-bold text-center">Continent: ${region}</p><hr>
                <p class="my-4 text-danger fw-bold text-center">Population: ${parseFloat(population/1000000).toFixed(2)} Million</p>
                <hr>`+
                `<span class="">Languages:</span> ${getLanguages(languages)}
                </div>
            </div>
        </div>
    `;
}

const getLanguages = (languages)=>{
    const allLanguages = Object.values(languages);
    let languageHTML= '';
    allLanguages.forEach(language=>{languageHTML+= `<span class="badge rounded-pill bg-danger">${language}</span> `;});
    languageHTML+=' </ul>';
    return languageHTML;
}

loadCountries();