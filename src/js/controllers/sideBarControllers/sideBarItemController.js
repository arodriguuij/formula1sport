import SideBarItemView from '../../views/sideBarViews/sideBarItemView';

export default class SideBarItemController {
    constructor() {
        this.SideBarItemView = new SideBarItemView();
    }

    renderSideBarItem(year) {
        if (parseInt(year) === new Date().getFullYear())
            this.SideBarItemView.render(year, true)  //True -> ActiveClass
        else
            this.SideBarItemView.render(year)

    }
}