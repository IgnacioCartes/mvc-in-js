var MVCinJS = (function (module) {
    'use strict';


    /*
     * Discogs Artist ID (Symphony X)
     */
    var ARTIST_ID = "291495";
    
    
    
    /*
     * Model constructor (XMLHttpRequest)
     *
     *  Creates a new model
     */
    var Model = function (XMLHttpRequest) {
        this.XMLHttpRequest = XMLHttpRequest;
    };



    /*
     * public getItem (id, callback)
     *
     *  Requests a single album, and passes data to a callback function
     */
    Model.prototype.getItem = function (id, callback) {
        request(
            this.XMLHttpRequest,
            'https://api.discogs.com/masters/' + id.toString(),
            //'json-mocks/masters-101417.json',
            //'json-mocks/masters-' + id.toString() + '.json',
            function (response) {
                callback(response);
            }
        );
    };



    /*
     * public getAllItems (callback)
     *
     *  Request list of all releases, and passes data to a callback function
     */
    Model.prototype.getAllItems = function (callback) {
        request(
            this.XMLHttpRequest,
            'https://api.discogs.com/artists/' + ARTIST_ID + '/releases',
            //'json-mocks/releases.json',
            function (response) {
                callback(response.releases);
            }
        );
    };



    /*
     * private request (HttpRequest, URL, callback)
     *
     *  Initializes a XMLHttpRequest to the provided URL, passing data to a callback function
     */
    function request(HttpRequest, URL, callback) {
        var req = new HttpRequest();

        req.onload = function (e) {
            var response = JSON.parse(e.currentTarget.responseText);
            callback(response);
        };

        req.open('GET', URL);
        req.send();
    }



    // returns Model to the global namespace
    module.Model = Model;
    return module;



})(MVCinJS || {});
