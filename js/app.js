/* globals window, MVCinJS */
window.onload = (function () {
    'use strict';


    /*
     * app.js
     *
     *  On window.load, creates a new model, view and controller
     *  When created, the Controller will initialize everything
     */
    var model = new MVCinJS.Model(window.XMLHttpRequest),
        view = new MVCinJS.View(window.document.getElementById("view"), window),
        controller = new MVCinJS.Controller(model, view);



})();
