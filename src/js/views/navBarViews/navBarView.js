export default class NavBarView {
    constructor() { }

    render() {
        const mark =
            `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" id="logo" href="#"> <img src="./img/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""> Formula 1 Sport</a>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="nav nav-pills" id="navbar-categories">
                        <!-- NAV ITEMS -->
                    </ul>
                </div>
            </nav>
        `;

        document.getElementById('navBar').insertAdjacentHTML('beforeend', mark);
    }
}