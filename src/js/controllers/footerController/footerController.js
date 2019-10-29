import FooterView from '../../views/footerViews/footerView'

export default class FooterController {
    constructor(){
        this.footerView = new FooterView();
    }

    renderFooterView(){
        this.footerView.render();
    };
}