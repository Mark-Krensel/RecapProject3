import {createCharacterCard} from "./components/card/card.js" //<-- muss hier die Dateiendung ".js" mit ran?

function fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20').then((response) => { //hier werden über die Zahlen im Link die characters 1-20 ausgewählt
    return response.json;
}.then((characters) => {

   //hier kommt die Funktion createCharacterCard hinein 

}))


}


