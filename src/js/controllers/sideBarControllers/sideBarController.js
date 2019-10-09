import * as callApi from '../../utils/callApi';
import SideBarView from '../../views/sideBarViews/sideBarView';
import SideBarItemController from './sideBarItemController';
import $ from 'jquery'

export default class SideBarController {
    constructor() {
        this.SideBarView = new SideBarView();
        this.SideBarItemController = new SideBarItemController();
    }

    async renderSideBar(queryParameter) {
        try {
            const result = await callApi.getQuery(queryParameter);

            const array = result.map(el => {
                return el.season;
            });

            this.SideBarView.clearSideBar();

            this.SideBarView.renderCategoriesResult();

            for (let i = 0; i < array.length; i++) {
                this.SideBarItemController.renderSideBarItem(array[i]);
            }

            // TODO: Buttons
            /*
            if(array.length > 10){
                this.SideBarView.renderButtons(false, false);
            }
            */

            const sidebarResults = document.getElementById('sidebar-items');
            this.addEventListener(sidebarResults);

            if(document.getElementsByClassName('nav-link sidebar-item active').length > 0)
                document.getElementsByClassName('nav-link sidebar-item active')[0].click()

        } catch (err) {
            console.log(err);
        }
    }

    addEventListener(sidebarResult) {
        sidebarResult.addEventListener('click', e => {
            e.preventDefault();
            if (document.getElementsByClassName('nav-link sidebar-item active').length > 0) {
                document.getElementsByClassName('nav-link sidebar-item active')[0].classList.remove('active');
            }
            e.target.classList.add('active');
            $(document).trigger('renderContentSideBar', e.target.childNodes[0].data);
        });
    }
} 