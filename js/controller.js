var MVCinJS = (function (module) {
    'use strict';



    var Controller = function (model, view) {
        this.model = model;
        this.view = view;

        this.init();
    };



    Controller.prototype.init = function () {
        this.showList();
        this.view.setListListener(this.onclickList.bind(this));
    };



    Controller.prototype.showItem = function (index) {
        this.model.getItem(index, this.view.renderItem.bind(this.view));
    };



    Controller.prototype.showList = function () {
        this.model.getAllItems(this.view.renderList.bind(this.view));
    };



    Controller.prototype.onclickList = function (e) {
        var target = e.target;
        this.showItem(target.dataset.discogsId);
    };



    module.Controller = Controller;
    return module;



})(MVCinJS || {});
