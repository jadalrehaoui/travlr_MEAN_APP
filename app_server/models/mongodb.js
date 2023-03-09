const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'; // checking env if production || dev
const db_uri = `mongodb://${host}/travlr`; // connection string
// const readLine = requrie('readLine');

// mongoose.set('useUnifiedTopology', true);

// connect function
const connect = () => {
    setTimeout(() => mongoose.connect(db_uri, {
        useNewUrlParser: true,
        // useCreateIndex: true
    }), 1000);
}
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

// running the function
connect();
// models
const Trip = require('./schemas/trips');
const Room = require('./schemas/rooms');
const Meal = require('./schemas/meals');
// seeding the database with fake data
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



