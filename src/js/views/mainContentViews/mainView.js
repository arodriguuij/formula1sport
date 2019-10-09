export default class MainView {

    constructor() {
    }

    render(isFullScreen) {
        const mark = `
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 bg-light ${isFullScreen ? 'd-none' : ''}" id="sidebar-results">
                    <!-- SIDEBAR ITEMS -->
                </nav>
                <div class="${isFullScreen ? 'col-12' : 'col-10'} pt-3 pb-3" id="main-view">
                    <!-- MAIN CONTENT-->
                    <div class="text-center">
                        <h1>F1 web page in construction...</h1>
                        <p class="lead">Wait sitted, it will be available soon.</p>
                        <img src="./img/website-maintenance.png"></img>
                    </div>
                </div>
            </div>
        </div>
    `;
        document.getElementById('content').insertAdjacentHTML('beforeend', mark)
    }
};