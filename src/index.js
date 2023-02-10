import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import renderCountries from './js/renderCountries';
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

function searchCountries(e) {
  let getCountry = e.target.value.trim();

  fetchCountries(getCountry)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));
