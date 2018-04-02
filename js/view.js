var MVCinJS = (function (module) {
    'use strict';



    /*
     * View constructor (element, window)
     *
     *  Creates a new view
     */
    var View = function (element, window) {
        this.element = element;
        this.window = window;

        // get all elements right away
        this.view = {
            main: element.querySelector("#view-main"),
            list: element.querySelector("#view-list")
        };
        this.view.tracklist = this.view.main.querySelector(".album.tracklist");
    };



    /*
     * public setListListener (callback)
     *
     *  Hook a click event listener to the albums list
     */
    View.prototype.setListListener = function (callback) {
        this.view.list.addEventListener("click", callback);
    };



    /*
     * public renderItem (item)
     *
     *  Renders a single album
     */
    View.prototype.renderItem = function (item) {
        this.element.dataset.discogsId = item.id;
        // render album info (title, year and cover)
        this.view.main.querySelector(".album.title").innerHTML = item.title;
        this.view.main.querySelector(".album.year").innerHTML = item.year.toString();
        this.view.main.querySelector(".album.cover").src = "images/" + item.id.toString() + ".jpg";
        // render tracklist
        this.view.tracklist.innerHTML = "";
        for (var index in item.tracklist) {
            // create new list item element with track title as innerHTML
            var newListItem = this.window.document.createElement("li");
            newListItem.innerHTML = item.tracklist[index].title;
            // if track is "heading", add a bottom border
            if (item.tracklist[index].type_ === "heading") newListItem.style.borderBottom = "1px solid #080D12";
            // add track time as float: right if one is provided
            if (item.tracklist[index].duration !== "") newListItem.innerHTML += " <span style=\"float:right;\" >" + item.tracklist[index].duration + "</span>";
            // append list item to tracklist
            this.view.tracklist.appendChild(newListItem);
        }
    };



    /*
     * public renderList (list)
     *
     *  Renders list with all albums
     */
    View.prototype.renderList = function (list) {
        // clear list
        this.view.list.innerHTML = "";
        for (var index in list) {
            // only display main releases
            if ((list[index].main_release) && (list[index].role === "Main")) {
                // create new list item
                var newListItem = this.window.document.createElement("li");
                // set discogs ID as dataset to recognize album
                newListItem.dataset.discogsId = list[index].id;
                // set innerHTML as album name and release year
                newListItem.innerHTML = list[index].title + " <span style=\"float:right;\" >" + list[index].year + "</span>";
                // append list item to discography list
                this.view.list.appendChild(newListItem);
            }
        }
    };



    // returns View to the global namespace
    module.View = View;
    return module;



})(MVCinJS || {});
