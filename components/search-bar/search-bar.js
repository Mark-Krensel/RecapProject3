// Search Bar Test von Jannik
const searchBar = document.querySelector('[data-js="search-bar"]');
const searchQuery = document.querySelector('[data-js="search-bar__input"]');

searchBar.addEventListener('submit', () => {
  searchQuery.textContent = searchBar.value;
  fetchCharacters();
});
