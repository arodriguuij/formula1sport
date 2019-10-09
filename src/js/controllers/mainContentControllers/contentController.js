import * as callApi from '../../utils/callApi';
import ContentView from '../../views/mainContentViews/contentView';
import CardController from './cardController';
import $ from 'jquery'

export default class contentController {
    constructor(category) {
        this.category = category;
        this.ContentView = new ContentView();
        this.CardController = new CardController();
        this.listeners();
    }

    listeners() {
        $(document).on('renderContentSideBar', (e, el) => {
            this.renderContent(el);
        });

    }

    async renderContent(year) {
        let queryParameter;
        this.category ? queryParameter = { categoryQuery: this.category.toLowerCase(), dataQuery: year+'/'+this.category.toLowerCase(), optionsQuery: '' } :
            queryParameter = { categoryQuery: 'year', dataQuery: year, optionsQuery: '' };

        const data = await callApi.getQuery(queryParameter);
        this.ContentView.clearContent();
        this.ContentView.renderContentView();
        this.CardController.renderCard(data, this.category.toLowerCase());
    }
}