module.exports = (req, res, next) => {
    res.render("home", {title: "Travlr", index_url: true, })
}