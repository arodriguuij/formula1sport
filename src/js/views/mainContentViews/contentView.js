export default class ContentView {
    constructor() {

    }

    renderContentView(category, year) {
        const markCategoryTitle = `<h2 id="category-title" class="text-center">${category} - ${year}</h2>`;
        const markCardsContainer = `<div id="cards-container"></div>`;
        document.getElementById('main-view').insertAdjacentHTML('beforeend', markCategoryTitle);
        document.getElementById('main-view').insertAdjacentHTML('beforeend', markCardsContainer);
    }

    clearContent() {
        while (document.getElementById('main-view').children.length>0)
         document.getElementById('main-view').removeChild(document.getElementById('main-view').children[0]);
    }
}
