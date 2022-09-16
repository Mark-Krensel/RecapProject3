const pageDisplay = document.querySelector('[data-js="pagination"]');
const  maxIndex = info.count // <-- vom fetch

function updatePageDisplay(operator) {
const pageCounter = 
pageDisplay.value operator 1;
pageDisplay.textContent = `${pageCounter} / ${maxIndex}`

}





 //const moreCharacters = await getCharacters({ page: 2 })

// https://rickandmortyapi.com/api/character/?page=2&name=rick -> für searchbar