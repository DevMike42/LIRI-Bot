# LIRI-Bot

## Overview
Similar to SIRI, LIRI is a Language Interpretation and Recognition Interface using Node.js and the Command Line Interface to take user input, search one of 3 APIs and give back data based on the search criteria.


## Usage

- Fist start by cloning the repo locally into a directory of your choice
- Run `npm install` in the command line to install all required dependencies
- Run 1 of the 4 commands listed below for each function of the application

Command option 1
node liri.js concert-this + `<Artist/Band Name here>` 
This will search the Bands in Town Artist Events API and return data related to the desired artist or Band. Example below

![Example1_gif](https://i.imgur.com/E6InCAJ.gif)

Command option 2
node liri.js spotify-this-song + `<song name here>` 
This will search the Spotify API and return data related to the desired song. Example below

![Example2_gif](https://i.imgur.com/1LVnrTZ.gif)


Command option 3
node liri.js movie-this + `<movie name here>` 
This will search the OMDB API and return data related to the desired movie. Example below

![Example3_gif](https://i.imgur.com/8GsLHl7.gif)


Command option 4
node liri.js do-what-it-says 
This will take the text inside of the random.txt file and use it to call one of the Liri commands. Example below

![Example_4](https://i.imgur.com/P4FhUuR.gif)


## Technologies
- Node.js
- npm axios
- npm inquirer
- npm dotenv

## APIs
- Bandsintown
- OMDB
- Spotify
