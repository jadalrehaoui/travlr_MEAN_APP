module.exports = (req, res, next) => {
    res.render("travel", {travel: true})
}