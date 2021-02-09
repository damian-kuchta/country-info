document.addEventListener('DOMContentLoaded', ()=> {

    function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
    const select = document.querySelector('select');
    const countryInfoConainer = document.querySelector('.country-info-container');
    const infoBox = document.querySelector('.info-box');
    const spinner = document.querySelector('.lds-ellipsis');
    const flagImg = document.querySelector('.flag-box__img');
    const countryInfo = document.querySelectorAll('.info-box__data');
    
    const getCountriesList = async () => {
        try {
            const response = await fetch("https://restcountries.eu/rest/v2/all");
            if(response.ok) {
                const data = await response.json();
                const optionsHTML = data.map(country => {
                    return `<option class="select-wrap__option" value=${country.alpha2Code}>${country.name}</option>`
                });

                select.insertAdjacentHTML('beforeend', optionsHTML);
                select.disabled = false;
            }
            else {
                throw new Error(response.status);
            }    
        } 
        catch (error) {
            console.log(error)
        }
    }

    const populateCountryInfo = async (e) => {
        try {
            countryInfoConainer.classList.remove('none');
            hideCountryItems();
            const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${e.target.value}`);
            if(response.ok) {
                const data = await response.json();
                
                const density = calculateDensity(data.population, data.area);
                const countryData = [data.name, data.region, data.capital, `${formatNumber(data.population)}` , `${formatNumber(data.area)} km2`, `${density} / km2`, data.currencies[0].name];
                flagImg.src = data.flag;
                countryInfo.forEach((info,idx)=> {
                    info.innerHTML = countryData[idx];
                });
                
                await wait(500);
                showCountryItems();
            }
            else {
                throw new Error (response.status);  
            }
        }
        catch (error) {
            console.log(error)
        }
    }
       
    const calculateDensity = (population, area) => Math.round(population/area);
   
    const formatNumber = number => new Intl.NumberFormat("en-Us").format(number);
   
    const hideCountryItems = () => {
        spinner.classList.remove('none');
        flagImg.classList.add('none');
        infoBox.classList.add('none');
    }
   
    const showCountryItems = () => {
        spinner.classList.add('none');
        flagImg.classList.remove('none');
        infoBox.classList.remove('none');
    }


    getCountriesList();
    select.addEventListener('change', populateCountryInfo);
});


