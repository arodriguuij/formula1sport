export default class View {

    constructor() {};

    render() {
        const mark = `
            <div id="navBar">
                <!-- Navbar -->
            </div>

            <div id="content">
                <!-- Content-->
            </div>

            <footer id="footer">
                <!-- Footer -->
            </footer>
        `;
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', mark);
    };

}