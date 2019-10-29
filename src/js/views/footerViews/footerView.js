export default class FooterView {
    constructor() {

    }

    render() {
        let mark =
            `      
            <div class="footer-copyright text-center py-1">Created by Alejandro Rodriguez</div>
        `;
        document.getElementsByTagName('footer')[0].insertAdjacentHTML('beforeend', mark);
    }
}