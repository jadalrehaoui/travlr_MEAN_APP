module.exports = (req, res, next) => {
    res.render("meals", {meals: true})
}