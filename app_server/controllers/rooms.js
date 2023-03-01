const fs = require('fs');

const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));
module.exports = (req, res, next) => {
    res.render("rooms", {title: "Rooms", rooms_url: true, rooms})
}