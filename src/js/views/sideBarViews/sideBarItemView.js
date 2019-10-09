export default class SideBarItemView{
    constructor(){
    }

    render(year, activeClass){
        const mark = 
        `
            <a class="nav-link sidebar-item ${activeClass ? 'active' : ''}" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true">${year}</a>
        `;
    
        document.getElementById('sidebar-items').insertAdjacentHTML('beforeend', mark);
    }
}