# Travlr Application
### Jad Alrehaoui

## Stack in use: MEAN

# Setup and Installation

- NodeJS
- ExpressJS

Let's start by generating an express project that has the views as hbs (Handlebars)

Run the following command
> express --view=hbs --git --force <folder-name>

access the folder and run 
>npm install

Once everything is installed 
> npm start

# Repo walkthrough

```app_server``` is MVC Structured, holds the models, routes, views and controllers. 

The ```controllers``` folder has an ```index.js``` file that is called by the routes to require the logic of each controller. ```index.js``` must be updated whenever we add a new controller. 

Each page has its own controller for now. 

The ```routes/index.js``` file holds all the routes we have right now, it imports the controllers and exports the router.

The ```views``` are files of type hbs (Handlebars), personally I would prefer ```ejs``` as it is easier and has more functionality. 

The ```layout.hbs``` is the theme, or we can say the header and footer of each page.
* I added ```partials``` to the views and separated the header and footer to have a cleaner code.

The ```static_theme``` folder holds ```html``` pages that are not used in the project but they are the template we chose. 

# Data
The data folder is built in the early stages of the development of this project. It was used to mimic the database functionality to be added later on. 
For now it only has 3 types of records ```rooms, meals, trips``` as jsons, because we are going to get JSON objects from the nosql database to be implemented later on. 

# Adding MongoDB 
First we need to add the mongoose dependency to the project, so we can run ```npm i -s mongoose``` or ```npm install --save mongoose```
Mongoose will serve as a connector and defining the schemas as well as a driver to query the database.
- If you don't have MongoDB installed on your machine you can start a free mongodb instance from [Mongodb](mongodb.com)
- Or you can install mongodb on your machine from [Download Mongo DB](https://www.mongodb.com/try/download/community-kubernetes-operator) and run it as a deamon on your machine.

Then we can start defining the schemas, refer to ```app_server/models/schemas``` where I have the schemas

An example of a schema :
````js
const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {type: String, required: true, index: true},
    section: {type: String, required: true,},
    image: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('meals', mealSchema);
````

Connecting to mongodb, we need a connection string
- if you're getting your mongodb from a cloud server you can get the connection string from mongodb website
- if you're running mongodb locally the connection string will look like this ```mongodb://127.0.0.1```

To connect to mongodb from the express server refer to the file ```mongodb.js``` in ```app_server/models```
````js
const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'; // checking env if production || dev
const db_uri = `mongodb://${host}/travlr`;

// connect function
const connect = () => {
    setTimeout(() => mongoose.connect(db_uri, {
        useNewUrlParser: true,
        // useCreateIndex: true
    }), 1000);
}
// running the function
connect();

// models
const Trip = require('./schemas/trips');
const Room = require('./schemas/rooms');
const Meal = require('./schemas/meals');


````

Other helper function are optional but they are cool to implement

````js
// when connected successfully
mongoose.connection.on('connected', () => {
    console.log(`✓ connected to mongodb @${host}`);
});
// when disconnected
mongoose.connection.on('disconnected', () => {
    console.log(`✕ disconnected from mongodb @${host}`);
});
// when error occurs
mongoose.connection.on('error', err => {
    console.log(`✕ MongoDB Error\n${err}`);
});
````

Then to feed the database with data from the data file (fake data) we can use the custom function I implemented in the ```models/mongodb.js``` at the bottom

This code will feed the database with the respective data and collections

````js
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));
const meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));
const insertTrips = async () => {
    const messages = [];
    // deleting all existing trips
    await Trip.deleteMany({});
    // inserting all trips in data file
    await Trip.insertMany(trips)
}
insertTrips().then( (err) => {
    if(!err) console.log('✓ trips were inserted');
})

const insertRooms = async () => {
    const messages = [];
    // deleting all existing trips
    await Room.deleteMany({});
    // inserting all trips in data file
    await Room.insertMany(rooms)
}
insertRooms().then( (err) => {
    if(!err) console.log('✓ rooms were inserted');
})

const insertMeals = async () => {
    const messages = [];
    // deleting all existing trips
    await Meal.deleteMany({});
    // inserting all trips in data file
    await Meal.insertMany(meals)
}
insertMeals().then( (err) => {
    if(!err) console.log('✓ meals were inserted');
})
````


 
