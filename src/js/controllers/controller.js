import MainController from './mainContentControllers/mainController';
import NavBarController from './navBarControllers/navBarController';
import MainModel from '../models/mainModel'
import $ from 'jquery'

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.navBarController = new NavBarController(this.model.categories);
    this.mainController = new MainController(new MainModel(this.model.fullScreen, ''))

    this.renderBody();
    this.renderNavBar();
    this.renderContent();
    this.renderFooter();

    this.listeners();
  };

  listeners() {
    $(document).on("click-Logo", () => {
      this.renderContentEvents(true);  //SideBar hidden
    });

    $(document).on("click-category", () => {
      this.renderContentEvents(false);  //SideBar visible
    });
  }

  renderContentEvents(isFullScreen){
    this.mainController.MainModel.setFullScree(isFullScreen);
    this.renderContent();
  }
  
  renderBody() {
    this.view.render();
  };

  renderNavBar() {
    this.navBarController.renderNavBar();
  };

  renderContent() {
    this.mainController.renderMainView();
  };

  renderFooter() {
    // TODO: footer
  };

}
