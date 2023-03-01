const fs = require('fs');

const meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));
module.exports = (req, res, next) => {
    res.render("meals", {title: "Meals", meals_url: true, meals})
}