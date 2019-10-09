import CategoryView from '../../views/navBarViews/categoryView';

export default class CategoryController{
    constructor(){
        this.CategoryView = new CategoryView();
    }
    renderCategory(category){
        this.CategoryView.render(category);
    }
}
