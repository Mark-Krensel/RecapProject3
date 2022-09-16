export {createCharacterCard};
const cardContainer = document.querySelector('[data-js="card-container"]');

function createCharacterCard(character) {
  const card = document.createElement('li');

  card.classList.add('card');

  card.innerHTML = `<li class="card">
<div class="card__image-container">
    <img
      src="${character.image}"
      alt="FIND!"
      class="card__image"
    />
    <div class="class__image-gradient"></div>
  </div>
  <div class="card__content">
<h2 class="card__title">${character.name}</h2>
<dl class="card__info">
<dt class="card__title">Status</dt>
<dd class="Card__info-title">${character.status}</dd>
<dt class="card__info-title">Type</dt>
<dd class="card__description">${character.type}</dd>
<dt class="card__info-title">Occurences</dt>
<dd class="card__info-description">${character.episode.length}</dd>
</dl>
</div>
</li>`;
  cardContainer.append(card);
}
