export default class CardsView {
  constructor() {

  }

  renderCategoriesResult(cardData, num, category) {
    let mark;
    switch (category) {
      case 'races':
        mark = `				 
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
            <div class="card">
            <img class="card-img-top" src="../img/logo.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${cardData.raceName}</h5>
                <p class="card-text">${cardData.Circuit.circuitName}</p>
                <p class="card-text">${cardData.Circuit.Location.locality} (${cardData.Circuit.Location.country})</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">${cardData.date}</small>
              </div>
            </div>
          </div>`;
        break
      case 'constructors':
          mark = `				 
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
            <div class="card">
            <img class="card-img-top" src="../img/logo.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${cardData.name}</h5>
                <p class="card-text">${cardData.nationality}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">${cardData.url}</small>
              </div>
            </div>
          </div>`;
        break;
      case 'drivers':
        mark = `				 
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
            <div class="card">
            <img class="card-img-top" src="../img/logo.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${cardData.givenName} ${cardData.familyName}</h5>
                <p class="card-text">${cardData.nationality}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">${cardData.dateOfBirth}</small>
              </div>
            </div>
          </div>`;

        break;
    }
    document.getElementById(`cards-container-father-${num}`).insertAdjacentHTML('beforeend', mark);
  }

  renderCategoriesResultFather(num) {
    const mark = `<div class="card-deck pt-2 pb-2" id="cards-container-father-${num}"></div>`;
    document.getElementById('cards-container').insertAdjacentHTML('beforeend', mark);
  }
}
