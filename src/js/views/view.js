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

            <footer class="fixed-bottom bg-light">
                <!-- Footer -->
            </footer>
        `;
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', mark);
    };

}