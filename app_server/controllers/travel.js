const fs = require('fs');
// get data from json
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
// controller logic
module.exports = (req, res, next) => {
    res.render("travel", {title: "Dive Sites", travel_url: true, trips})
}