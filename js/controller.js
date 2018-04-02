var MVCinJS = (function (module) {
    'use strict';



    /*
     * Controller constructor (model, view)
     *
     *  Creates a new controller
     */
    var Controller = function (model, view) {
        this.model = model;
        this.view = view;

        this.init();
    };



    /*
     * public init ()
     *
     *  Initializes controller
     */
    Controller.prototype.init = function () {
        this.showList();
        this.view.setListListener(this.onclickList.bind(this));
    };



    /*
     * public showItem (index)
     *
     *  Gets an item (album) corresponding to an index from the model and calls the view to render it
     */
    Controller.prototype.showItem = function (index) {
        /* model.getItem requires a callback function once it has retrieved the data
         * we will pass this.view.renderItem to take care of the data and display it */
        this.model.getItem(index, this.view.renderItem.bind(this.view));
    };



    /*
     * public showList ()
     *
     *  Gets a list (of albums) from the model and calls the view to render it
     */
    Controller.prototype.showList = function () {
        /* model.getAllItems requires a callback function once it has retrieved the data
         * we will pass this.view.renderList to take care of the data and display it */
        this.model.getAllItems(this.view.renderList.bind(this.view));
    };



    /*
     * public onclickList (evt)
     *
     *  Function to be called when an item in the albums list is clicked
     */
    Controller.prototype.onclickList = function (evt) {
        var target = evt.target;
        this.showItem(target.dataset.discogsId);
    };



    // returns Controller to the global namespace
    module.Controller = Controller;
    return module;



})(MVCinJS || {});
