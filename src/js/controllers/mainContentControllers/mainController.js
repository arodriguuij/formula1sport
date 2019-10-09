import MainView from '../../views/mainContentViews/mainView';
import SideBarController from '../sideBarControllers/sideBarController'
import ContentController from '../mainContentControllers/contentController'
import $ from 'jquery'

export default class MainController {
    constructor(model) {
        this.MainModel = model;
        this.MainView = new MainView(this.MainModel.isFullScreen);
        this.ContentController = new ContentController('');
        this.SideBarController = new SideBarController();
        this.listeners();
    }

    listeners() {
        //$(document).on('clic-category-renderSideBar', (e, el, limit, offset) => {
        $(document).on('clic-category-renderSideBar', (e, el) => {
            this.ContentController.category = el.textContent;
            const queryParams = { categoryQuery: 'seasons', dataQuery: 'seasons', optionsQuery: `?limit=10&offset=60` };
            this.SideBarController.renderSideBar(queryParams);
        });
    }

    renderMainView() {
        if (document.getElementById('content').children.length > 0) {
            document.getElementById('content').removeChild(document.getElementById('content').children[0]);
        }
        this.MainView.render(this.MainModel.isFullScreen)
    }
}
