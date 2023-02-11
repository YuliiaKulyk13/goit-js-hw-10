import { Notify } from 'notiflix';

export default function renderCountries(dataCountries) {
  const countryList = document.querySelector('.country-list');
  const countryInfo = document.querySelector('.country-info');

  let countryItem = [];
  let quantityCountries = dataCountries.length;
  let currentCountry = dataCountries[0];

  if (quantityCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (quantityCountries <= 10 && quantityCountries >= 2) {
    dataCountries.map(country => {
      countryItem.push(`
          <li>
          <img src="${country.flags.svg}" alt='flag' width=40 class="country-flag"/>
          <span class="country-name">${country.name}</span>
          </li>
          `);
    });
    countryList.innerHTML = countryItem;
    countryInfo.innerHTML = '';
  } else {
    // let country = data[0];
    // let languages = [];
    // country.languages.map(language => {
    //   languages.push(language.name);
    // }
    countryInfo.innerHTML = `
    <img src="${
      currentCountry.flags.svg
    }" alt='flag' width=40 class='country-flag'/>
    <h2 class="country-name">${currentCountry.name}</h2>
    <div>
    <p>Capital: ${currentCountry.capital}</p>
    <p>Population:${currentCountry.population}</p>
    <p>Languages: ${currentCountry.languages.join(', ')}</p>
    </div>
    `;
    countryList.innerHTML = '';
  }
}
