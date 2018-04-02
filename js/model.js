var MVCinJS = (function (module) {
    'use strict';



    var Model = function (XMLHttpRequest) {
        this.XMLHttpRequest = XMLHttpRequest;
        this.init();
    };

    

    Model.prototype.init = function () {};



    Model.prototype.getItem = function (id, callback) {
        request(
            this.XMLHttpRequest,
            //'https://api.discogs.com/masters/' + id.toString(),
            'json-mocks/masters-101417.json',
            //'json-mocks/masters-' + id.toString() + '.json',
            function (response) {
                callback(response);
            }
        );
        //console.log('https://api.discogs.com/masters/' + id.toString());
    };



    Model.prototype.getAllItems = function (callback) {
        request(
            this.XMLHttpRequest,
            //'https://api.discogs.com/artists/291495/releases',
            'json-mocks/releases.json',
            function (response) {
                callback(response.releases);
            }
        );
        //callback(data);
    };



    function request(HttpRequest, URL, callback) {
        var req = new HttpRequest();

        req.onload = function (e) {
            var response = JSON.parse(e.currentTarget.responseText);
            callback(response);
        };

        req.open('GET', URL);
        req.send();
    }



    var data = [
        {
            name: "Paradise Lost",
            year: 2007,
            coverURL: "images/ParadiseLost.jpg"
        },
        {
            name: "Underworld",
            year: 2015,
            coverURL: "images/Underworld.jpg"
        },
        {
            name: "The Odyssey",
            year: 2002,
            coverURL: "images/TheOdyssey.jpg"
        },
        {
            name: "The Divine Wings of Tragedy",
            year: 1997,
            coverURL: "images/TheDivineWingsOfTragedy.jpg"
        },
        {
            name: "Iconoclast",
            year: 2011,
            coverURL: "images/Iconoclast.jpg"
        },
        {
            name: "V: The New Mythology Suite",
            year: 2000,
            coverURL: "images/V.jpg"
        },
        {
            name: "Twilight in Olympus",
            year: 1998,
            coverURL: "images/TwilightInOlympus.jpg"
        },
        {
            name: "The Damnation Game",
            year: 1995,
            coverURL: "images/TheDamnationGame.jpg"
        },
        {
            name: "Symphony X",
            year: 1994,
            coverURL: "images/SymphonyX.jpg"
        },
        {
            name: "Live on the Edge of Forever",
            year: 2001,
            coverURL: "images/LiveOnTheEdgeOfForever.jpg"
        }

    ];



    module.Model = Model;
    return module;



})(MVCinJS || {});
