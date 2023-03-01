module.exports = (req, res, next) => {
    res.render("about", {about: true})
}