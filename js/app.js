/* globals window, MVCinJS */
window.onload = (function () {
    'use strict';
    

    
    var model = new MVCinJS.Model(window.XMLHttpRequest),
        view = new MVCinJS.View(window.document.getElementById("view"), window),
        controller = new MVCinJS.Controller(model, view);

    
    
})();
