export default class Model {
    constructor(isFullScreen, category) {
        this.isFullScreen = isFullScreen,
        this.category = category
    }

    setFullScree(isFullScreen){
        this.isFullScreen = isFullScreen;
    }

    setCategory(category){
        this.category = category;
    }
}
    