export function createCharacterCard() {}

function createCharacterCard(character) {
  const card = document.createElement('li');

  card.classList.add('card-container');

  card.innerHTML = `<article class="card">
<div class="card__image-container">
    <img
      src="${character.image}"
      alt="FIND!"
    />
    <div class="class__image-gradient"></div>
  </div>
  <div class="card__content">
<h2 class="card__title">${character.name}</h2>
<dl class="card__info">
<dt class="card__title">${character.title}</dt>
<dd class="Card__info-title">${character.status}</dd>
<dt class="card__info-title">${character.info}</dt>
<dd class="card__description">${character.description}</dd>
<dt class="card__info-title">${character.info}</dt>
<dd class="card__info-description">${character.info}</dd>
</dl>
</div>
</article>`;
}
