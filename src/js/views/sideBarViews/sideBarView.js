export default class SideBarView{
    constructor(){

    }

    renderCategoriesResult(){
        const mark = `
            <div class="nav flex-column nav-pills" id="sidebar-items" role="tablist" aria-orientation="vertical"></div>
        `;
        document.getElementById('sidebar-results').insertAdjacentHTML('beforeend', mark);
    }

    renderButtons(hiddenButtonBefore, hiddenButtonAfter){
        const mark = `
            <div class="row justify-content-between p-2">
                <button type="button" class="btn btn-primary col-5 ${hiddenButtonBefore ? 'd-none' : ''}">Before</button>
                <button type="button" class="btn btn-primary col-5 ${hiddenButtonAfter ? 'd-none' : ''}" >Next</button>
            </div>
        `;
        document.getElementById('sidebar-results').insertAdjacentHTML('beforeend', mark);
    }

    clearSideBar() {
        while (document.getElementById('sidebar-results').firstChild) {
            document.getElementById('sidebar-results').removeChild(document.getElementById('sidebar-results').firstChild);
        }
    }

}
