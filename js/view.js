var MVCinJS = (function (module) {
    'use strict';



    var View = function (element, window) {
        this.element = element;
        this.window = window;

        this.view = {
            main: element.querySelector("#view-main"),
            list: element.querySelector("#view-list")
        };
    };



    View.prototype.setListListener = function (callback) {
        this.view.list.addEventListener("click", callback);
    };



    View.prototype.renderItem = function (item) {
        this.element.dataset.discogsId = item.id;
        this.view.main.querySelector(".album.title").innerHTML = item.title;
        this.view.main.querySelector(".album.year").innerHTML = item.year.toString();
        this.view.main.querySelector(".album.cover").src = "images/" + item.id.toString() + ".jpg";
        var tracklistEl = this.view.main.querySelector(".album.tracklist");
        var trackHeading = 0;
        tracklistEl.innerHTML = "";
        for (var index in item.tracklist) {
            var newListItem = this.window.document.createElement("li");
            if (item.tracklist[index].type_ === "heading") {
                newListItem.style.borderBottom = "1px solid #080D12";
                trackHeading = item.tracklist[index].position;
            }
            newListItem.innerHTML = item.tracklist[index].title + " <span style=\"float:right;\" >" + item.tracklist[index].duration + "</span>";
            tracklistEl.appendChild(newListItem);
        }
    };



    View.prototype.renderList = function (list) {
        this.view.list.innerHTML = "";
        for (var index in list) {
            // only display main releases
            if ((list[index].main_release) && (list[index].role === "Main")) {
                var newListItem = this.window.document.createElement("li");
                newListItem.dataset.discogsId = list[index].id;
                newListItem.innerHTML = list[index].title + " <span style=\"float:right;\" >" + list[index].year + "</span>";
                this.view.list.appendChild(newListItem);
            }
        }
    };



    module.View = View;
    return module;



})(MVCinJS || {});
