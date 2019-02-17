require('dotenv').config();
const fs = require('fs');
const axios = require('axios');
const Spotify = require('node-spotify-api');
const keys = require('./keys.js');
var moment = require('moment');

function Liri() {

    var divider = '\n----------------------------------------------\n\n';

    this.searchBand = function (search) {
        axios.get('https://restbandsintown.com/artists/' + search + '/events', {
            params: {
                app_id: keys.code.band_key
            }
        })
        .then(function (response) {
            var data = response.data;

            for (i in data) {
                var date = moment(data[i].datetime).format("MM DD, YYYY");
                console.log('What: ' + data[i].venue.name);
                console.log('Where: ' + data[i].venue.city + ', ' + data[i].venue.country);
                console.log('When: ' + date);
                console.log(divider);
            }

        })
        .catch(function (error) {
            console.log(error);
        });

    };

    this.searchSpotify = function (search) {

        var spotify = new Spotify ({
            id: keys.spotify.id, // Was originally the problem
            secret: keys.spotify.secret
        });

        spotify.search({ type: 'track', query: search }, function (err, data) {

            if (err) {
                return console.log('Error occured: ' + err);
            }

            for (i in data.tracks.items) {
                var track = data.tracks.items[i];

                console.log('Artist(s): ' + track.artists[0].name);
                console.log('Track: ' + track.name);
                console.log('Spotify song link: ' + track.externam_urls.spotify);
                console.log('Album: ' + track.album.name);
                console.log(divider);
            }

        });
    };

    this.searchMovie = function (search) {
        axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: keys.code.omdb_key,
                t: search
            }
        })
        .then(function (response) {
            var data = response.data;

            console.log('Title: ' + data.Title);
            console.log('Year: ' + data.Year);
            console.log('IMDB Rating: ' + data.Ratings[0].Value);
            console.log('Rotten Tomatoes: ' + data.Ratings[1].Value);
            console.log('Country: ' + data.Country);
            console.log('Language: ' + data.Language);
            console.log('Plot: ' + data.Plot);
            console.log('Actors: ' + data.Actors);
            console.log(divider);
        
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    this.searchLiri = function (f) {
        fs.readFile('random.txt', function (err, data) {
            if (err) { throw err };
            var newData = data.toString().split(',');
            f(newData[0], newData[1]);
        });
    };

};

module.exports = Liri;