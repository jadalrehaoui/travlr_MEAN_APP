module.exports = (req, res, next) => {
    res.render("about", {title: "About", about_url: true})
}