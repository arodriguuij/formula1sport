export default class CategoryView{
    constructor(){

    }

    render(category){
        const mark = 
        `
            <li class="nav-item">
                <a class="nav-link" href="#">${category}</a>
            </li>
        `;
    
        document.getElementById('navbar-categories').insertAdjacentHTML('beforeend', mark);
    }
}