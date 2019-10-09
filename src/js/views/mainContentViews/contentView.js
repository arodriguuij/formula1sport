export default class ContentView {
    constructor() {

    }

    renderContentView() {
        const mark = `<div id="cards-container"></div>`;
        document.getElementById('main-view').insertAdjacentHTML('beforeend', mark);
    }

    clearContent() {
        if (document.getElementById('main-view').children[0])
            document.getElementById('main-view').removeChild(document.getElementById('main-view').children[0]);
    }
}
