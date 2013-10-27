Hackathon 2013 - ZH
===================

### Collaborators

[mrastan](https://github.com/mrastan) and [pmukerji](https://github.com/pmukerji) from [electric-feel](https://github.com/electric-feel) 

### Description

NodeJS server and HTML/CSS/JavaScript GUI for viewing play-back of an E-Bike trip.

Example trip provided in geoJSON format with `voltage`, `altitude`, `distance`(accumulated), and `speed`. Each point also has embedded reference to nearby (<200m) points of interest (e.g. venues) retrieved via the Foursquare API.

### Reference

Basic FE design also uses elements from [quantified-self-mock](https://github.com/mrastan/quantified-self-mock) by [mrastan](https://github.com/mrastan)

### Running

To run the app:

* Download and install [node.js](http://nodejs.org)
* Run `npm install` in the main directory (installs packages in `package.json`)
* Run `node app` in the main directory
* Open a browser is point it to `localhost:3000`