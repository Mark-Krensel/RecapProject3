import {createCharacterCard} from './components/card/card.js'; //<-- muss hier die Dateiendung ".js" mit ran?

const fetchCharacters = async () => {
  try {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await result.json();
    console.log(characters);
  } catch (error) {
    console.error(error);
  }
};
fetchCharacters();
//1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
