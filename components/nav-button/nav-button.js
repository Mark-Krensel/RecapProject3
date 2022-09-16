import updatePageDisplay from '../nav-pagination/nav-pagination.js';
import fetchCharacters from './index.js'; //<-- ggf. Pfad anpassen

const nextButton = document.querySelector('[data-js="button-next"]');
const previousButton = document.querySelector('[data-js="button-prev"]');

nextButton.addEventListener('click', () => {
  updatePageDisplay('+');
  fetchCharacters();
});

previousButton.addEventListener('click', () => {
  updatePageDisplay('-');
  fetchCharacters();
});
