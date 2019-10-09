import CategoryController from './categoryController';
import NavBarView from '../../views/navBarViews/navBarView'
import $ from 'jquery'

export default class NavBarController {
    constructor(categories) {
        this.categories = categories;
        this.NavBarView = new NavBarView();
        this.CategoryController = new CategoryController();
    }

    renderNavBar() {
        this.NavBarView.render();
        this.categories.forEach(category => {
            this.CategoryController.renderCategory(category);
        });
        this.addEventListener();
    }

    addEventListener() {
        this.addEventListenerToLogo();
        this.addEventListenerToCategories();
    }

    addEventListenerToLogo() {
        document.getElementById('logo').addEventListener('click', e => {
            e.preventDefault();
            this.removeActiveClassCategory();
            $(document).trigger("click-Logo");
        });
    }

    addEventListenerToCategories() {
        document.getElementById('navbar-categories').addEventListener('click', e => {
            e.preventDefault();
            this.removeActiveClassCategory();
            this.addActiveClassCategory(e);
            this.showSideBar();
            this.renderSideBar(e);
        });
    }

    removeActiveClassCategory() {
        if (document.getElementsByClassName('nav-link active').length > 0) {
            document.getElementsByClassName('nav-link active')[0].classList.remove('active');
        }
    }

    addActiveClassCategory(e) {
        e.target.classList.add('active')
    }

    showSideBar() {
        $(document).trigger("click-category");
    }

    renderSideBar(e) {
        console.log(e.target.text)
        $(document).trigger('show-sideBar');
        //let limit= 11, offset= 59;
        //$(document).trigger('clic-category-renderSideBar', [e.target, limit, offset]);
        $(document).trigger('clic-category-renderSideBar', [e.target]);
    }
}