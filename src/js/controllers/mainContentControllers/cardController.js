import CardsViews from '../../views/mainContentViews/cardsView';

export default class CardController {
    constructor() {
        this.CardsView = new CardsViews();
    }

    renderCard(array, category) {
        const arrayRows = this.splitArray4(array);
        arrayRows.forEach((el, i) => {
            el.forEach((el2) => {
                this.CardsView.renderCategoriesResult(el2, i, category);
            });
        });
    }

    splitArray4(array) {
        let i = 0, rows = [];
        while (array.length) {
            this.CardsView.renderCategoriesResultFather(i);
            rows.push(array.splice(0, 3));
            i++;
        }
        return rows;
    }
}
